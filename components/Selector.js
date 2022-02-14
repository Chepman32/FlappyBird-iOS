import React, { useState, useEffect }  from 'react';
import {
  View,
  SafeAreaView, 
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { width, height } from './StartScreen';

export const Selector = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const renderItem = ({item}) => {
    
      return (
        <View style={styles.slide} >
        <Text>{item.num} </Text>
        <Image style={{width: width * 0.3, height: width * 0.3}} source={item.uri} resizeMode="contain" />
        <TouchableOpacity style={styles.buyBtn} >
          <Text>Buy {item.type}</Text>
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
    {type: "location", uri: require(`../assets/img/background-winter.png`)},
    {type: "location", uri: require(`../assets/img/background-spring.png`)},
    {type: "location", uri: require(`../assets/img/background-summer.png`)},
    {type: "location", uri: require(`../assets/img/background-autumn.png`)},
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
              renderItem={renderItem}
              sliderWidth={width}
              itemWidth={width}
            />
            <Text style={styles.sectionTitle}>Locations</Text>
            <Carousel
          horizontal={true}
              ref={(c) => { carousel = c; }}
              data={locationVariants}
              renderItem={renderItem}
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