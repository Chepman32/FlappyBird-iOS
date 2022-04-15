import React, { useState, useEffect }  from 'react';
import {
  View,
  SafeAreaView, 
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Carousel from 'react-native-snap-carousel';
import { width, height } from './StartScreen';

export const Selector = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [currentBird, setCurrentBird] = useState(1)
  const [currentLocation, setCurrentLocation] = useState(1)
  
  const saveBird = async (value) => {
  try {
    await AsyncStorage.setItem("BIRD", value)
    alert('BIRD successfully saved')
  } catch (e) {
    alert('Failed to save the data to the storage')
  }
}

const saveLocation = async (value) => {
  try {
    await AsyncStorage.setItem("LOCATION", value)
    alert(value + ' successfully saved')
  } catch (e) {
    alert('Failed to save the data to the storage')
  }
}

  const renderBird = ({item}) => {
    
      return (
        <View style={styles.slide} >
        <Text>{item.num} </Text>
        <Image style={{width: width * 0.3, height: width * 0.3}} source={item.uri} resizeMode="contain" />
        <TouchableOpacity onPress={() => saveBird((birdVariants.indexOf(item) + 1).toString())} style={styles.buyBtn} >
          <Text>Buy {item.type} {birdVariants.indexOf(item) + 1} </Text>
        </TouchableOpacity>
        </View>

      )
  }
  const renderLocation = ({item}) => {
    
      return (
        <View style={styles.slide} >
        <Text>{item.num} </Text>
        <Image style={{width: width * 0.3, height: width * 0.3}} source={item.uri} resizeMode="contain" />
        <TouchableOpacity onPress={() => saveLocation(item.title)} style={styles.buyBtn} >
          <Text >Buy {item.type}  </Text>
        </TouchableOpacity>
        </View>

      )
  }
  const birdVariants = [
    {type: "bird", uri: require(`../assets/img/bird1/bird1.png`)},
    {type: "bird", uri: require(`../assets/img/bird2/bird1.png`)},
    {type: "bird", uri: require(`../assets/img/bird3/bird1.png`)},
  ]
  const locationVariants = [
    {type: "location", uri: require(`../assets/img/background-winter.png`), title: "Winter"},
    {type: "location", uri: require(`../assets/img/background-spring.png`), title: "Spring"},
    {type: "location", uri: require(`../assets/img/background-summer.png`), title: "Summer"},
    {type: "location", uri: require(`../assets/img/background-autumn.png`), title: "Autumn"},
  ]
  let carousel = null
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Birds</Text>
          <Carousel
          horizontal={true}
              ref={(c) => { carousel = c; }}
              data={birdVariants}
              renderItem={renderBird}
              sliderWidth={width}
              itemWidth={width}
            />
            <Text style={styles.sectionTitle}>Locations</Text>
            <Carousel
          horizontal={true}
              ref={(c) => { carousel = c; }}
              data={locationVariants}
              renderItem={renderLocation}
              sliderWidth={width}
              itemWidth={width}
            />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "500"
  },
  slide: {
    width: width * 0.5,
    justifyContent: "center",
    alignItems: "center",
    
  },
  buyBtn: {
    width: width * 0.3,
    marginTop: height * 0.02,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.01,
    backgroundColor: "#DBF120",
    overflow: "hidden",
    borderWidth: width * 0.01,
    borderColor: "#F16220",
    borderRadius: width * 0.03
  }
})