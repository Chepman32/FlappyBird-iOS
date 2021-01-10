import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Dimensions, StyleSheet, Text, View, StatusBar, Alert, TouchableOpacity, Image, Platform, TouchableWithoutFeedback } from 'react-native';
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";
import Physics, { resetPipes } from './Physics';
import Constants from './Constants';
// AdMob
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
   } from "expo-ads-admob"
import GameContainer from './components/GameContainer';
import { NavigationContainer } from '@react-navigation/native';
import { StartScreen } from './components/StartScreen';
   const Stack = createStackNavigator();
export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            running: true,
            score: 0,
            played: 0,
        };
    }

    
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
      <Stack.Screen name="StartScreen" component={StartScreen} options={{
          title: "Hello-screen",
          headerShown: false
          }} />
      <Stack.Screen name="GameContainer" component={GameContainer} options={{
          headerShown: false
      }} />
    </Stack.Navigator>
            </NavigationContainer>
        );
    }
}