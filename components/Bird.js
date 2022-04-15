import React, { Component } from "react";
import { View, Image, Animated } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class Bird extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bird: 1
        }
        this.animatedValue = new Animated.Value(this.props.body.velocity.y);
    }

    componentDidMount() {
        this.readData()
    }
    readData = async () => {
  try {
    const bird = await AsyncStorage.getItem("BIRD")
    if (bird !== null) {
      this.setState({bird: Number(bird)})
      console.warn(Number(this.state.bird) * 4)
      return bird
  }
}
  catch (e) {
    alert('Failed to fetch the data from storage')
  }
}

    render() {
        const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
        const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
        const x = this.props.body.position.x - width / 2;
        const y = this.props.body.position.y - height / 2;

        this.animatedValue.setValue(this.props.body.velocity.y);
        let rotation = this.animatedValue.interpolate({
            inputRange: [-10, 0, 10, 20],
            outputRange: ['-20deg', '0deg', '15deg', '45deg'],
            extrapolate: 'clamp'
        })

        let { bird } = this.state
        let images = bird === 1 ? {
            bird1: require(`../assets/img/bird${1}/bird1.png`),
            bird2: require(`../assets/img/bird${1}/bird2.png`),
            bird3: require(`../assets/img/bird${1}/bird3.png`),
        }
        : bird === 2 ? {
            bird1: require(`../assets/img/bird${2}/bird1.png`),
            bird2: require(`../assets/img/bird${2}/bird2.png`),
            bird3: require(`../assets/img/bird${2}/bird3.png`),
        }
        : {
            bird1: require(`../assets/img/bird${3}/bird1.png`),
            bird2: require(`../assets/img/bird${3}/bird2.png`),
            bird3: require(`../assets/img/bird${3}/bird3.png`),
        }
        let image = images['bird' + this.props.pose];

        return bird && (
            <Animated.Image
                style={{
                    position: "absolute",
                    left: x,
                    top: y,
                    width: width,
                    height: height,
                    transform: [{ rotate: rotation }]
                }}
                resizeMode="stretch"
                source={image} />
    );
  }
}
