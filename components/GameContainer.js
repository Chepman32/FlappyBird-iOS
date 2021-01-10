import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, StatusBar, Alert, TouchableOpacity, Image, Platform, TouchableWithoutFeedback, Button } from 'react-native';
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";
import Bird from './Bird';
import Physics, { resetPipes } from '../Physics';
import Constants from '../Constants';
// AdMob
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
   } from "expo-ads-admob"
import Floor from './Floor';
   const { width, height } = Dimensions.get("screen")
   const TouchableWrapper = Platform.select({
       "android": TouchableWithoutFeedback,
       "ios": TouchableOpacity
   })
export default class GameContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            running: true,
            score: 0,
            played: 0,
        };

        this.gameEngine = null;

        this.entities = this.setupWorld();
    }

    bannerError = () => {
        console.log('banner ad not loading')
      }
    bannerAdReceived = () => {
        console.log('banner ad received')
      }
    showInterstitial = async () => {
        AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
        
        try{
          await AdMobInterstitial.requestAdAsync();
          await AdMobInterstitial.showAdAsync();
        }
        catch(e){
          console.log(e);
        }
    }
    showRewarded = async () => {
        AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917'); // Test ID, Replace with your-admob-unit-id
        
        try{
          await AdMobRewarded.requestAdAsync();
          await AdMobRewarded.showAdAsync();
        }
        catch(e){
          console.log(e);
        }
      }

    setupWorld = () => {
        let engine = Matter.Engine.create({ enableSleeping: false });
        let world = engine.world;
        world.gravity.y = 0.0;

        let bird = Matter.Bodies.rectangle( Constants.MAX_WIDTH / 2, Constants.MAX_HEIGHT / 2, Constants.BIRD_WIDTH, Constants.BIRD_HEIGHT);

        let floor1 = Matter.Bodies.rectangle(
            Constants.MAX_WIDTH / 2,
            Constants.MAX_HEIGHT - 25,
            Constants.MAX_WIDTH + 4,
            50,
            { isStatic: true }
        );

        let floor2 = Matter.Bodies.rectangle(
            Constants.MAX_WIDTH + (Constants.MAX_WIDTH / 2),
            Constants.MAX_HEIGHT - 25,
            Constants.MAX_WIDTH + 4,
            50,
            { isStatic: true }
        );


        Matter.World.add(world, [bird, floor1, floor2]);
        Matter.Events.on(engine, 'collisionStart', (event) => {
            var pairs = event.pairs;

            this.gameEngine.dispatch({ type: "game-over"});

        });

        return {
            physics: { engine: engine, world: world },
            floor1: { body: floor1, renderer: Floor },
            floor2: { body: floor2, renderer: Floor },
            bird: { body: bird, pose: 1, renderer: Bird},
        }
    }

    onEvent = (e) => {
        if (e.type === "game-over"){
            //Alert.alert("Game Over");
            this.setState({
                running: false
            });
        } else if (e.type === "score") {
            this.setState({
                score: this.state.score + 1
            })
        }
    }

    reset = () => {
        resetPipes();
        this.gameEngine.swap(this.setupWorld());
        this.setState({
            played: this.state.played + 1,
            running: true,
            score: 0,
            paused: false
        });
        if(this.state.played % 5 === 0 && this.state.played > 4 && this.state.played !== 15) {
            this.showInterstitial()
        }
        if(this.state.played % 15 === 0 && this.state.played >= 15) {
this.showRewarded()
        }
        console.log(this.state.played)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={Images.background} style={styles.backgroundImage} resizeMode="stretch" />
                <GameEngine
                    ref={(ref) => { this.gameEngine = ref; }}
                    style={styles.gameContainer}
                    systems={[Physics]}
                    running={this.state.running}
                    onEvent={this.onEvent}
                    entities={this.entities}>
                    <StatusBar hidden={true} />
                </GameEngine>
                <TouchableWrapper style={styles.pauseBtn} onPress={() => this.setState({ running: false, paused: true })} >
                    <Text style={styles.pauseBtnText} >&#10074; &#10074;</Text>
                </TouchableWrapper>
                <Text style={styles.score}>{this.state.score}</Text>
                {!this.state.running && !this.state.paused && <TouchableWrapper style={styles.fullScreenButton} onPress={this.reset}>
                    <View style={styles.fullScreen}>
                        <Text style={styles.gameOverText}>Game Over</Text>
                        <Text style={styles.gameOverSubText}>Try Again</Text>
                        <Text style={styles.gameOverSubText}
                         onPress={() => this.props.navigation.navigate("StartScreen")} >Go home
                         </Text>
                    </View>
                </TouchableWrapper>}
                
                {!this.state.running && this.state.paused && 
                <TouchableWrapper style={styles.fullScreenButton} onPress={() => this.setState({ running: true, paused: false })} >
                    <View style={styles.fullScreen}>
                        <Text style={styles.gameOverText}>Game paused</Text>
                        <Text style={styles.gameOverSubText}>Try Again</Text>
                        <Text style={styles.gameOverSubText}
                         onPress={() => this.props.navigation.navigate("StartScreen")} >Go home
                         </Text>
                    </View>
                </TouchableWrapper>}
                <PublisherBanner
  bannerSize="fullBanner"
  style={styles.bottomBanner}
  adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
  onDidFailToReceiveAdWithError={this.bannerError}
  onAdMobDispatchAppEvent={this.adMobEvent} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: Constants.MAX_WIDTH,
        height: Constants.MAX_HEIGHT
    },
    gameContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    gameOverText: {
        color: 'white',
        fontSize: 48,
    },
    gameOverSubText: {
        color: 'white',
        fontSize: 24,
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    score: {
        position: 'absolute',
        color: 'white',
        fontSize: 72,
        top: 50,
        left: Constants.MAX_WIDTH / 2 - 20,
        textShadowColor: '#444444',
        textShadowOffset: { width: 2, height: 2},
        textShadowRadius: 2,
    },
    pauseBtn: {
        position: "absolute",
        top: height * 0.04,
        right: width * 0.08,
        zIndex: 1000
    },
    pauseBtnText: {
        fontSize: height * 0.04,
    },
    fullScreenButton: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1
    },
    interstitialBanner: {
        width: "100%",
        marginLeft: 0
      },
    bottomBanner: {
        minHeight: height * 0.1,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#ccc"
      },
});
