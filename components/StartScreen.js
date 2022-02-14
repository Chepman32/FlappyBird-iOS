import React from "react"
import { Button, Dimensions, Platform, StatusBar, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler"
export const { width, height } = Dimensions.get("screen")
const TouchableWrapper = Platform.select({
  "android": TouchableWithoutFeedback,
  "ios": TouchableOpacity
})
export const StartScreen = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <TouchableWrapper onPress={() => props.navigation.navigate("GameContainer")} style={styles.menuButton} >
      <Text>New game</Text>
      </TouchableWrapper>
      <TouchableWrapper onPress={() => props.navigation.navigate("Store")} style={styles.menuButton} >
      <Text>Store</Text>
      </TouchableWrapper>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "space-around",
    alignItems: "center",
  },
  menuButton: {
    width: width * 0.9,
    paddingHorizontal: width * 0.3,
    paddingVertical: height * 0.015,
    backgroundColor: "#DBF120",
    overflow: "hidden",
    borderWidth: width * 0.01,
    borderColor: "#F16220",
    borderRadius: width * 0.03
  }
})