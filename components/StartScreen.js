import React from "react"
import { Button, Dimensions, Platform, StatusBar, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler"
const { width, height } = Dimensions.get("screen")
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
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    paddingHorizontal: width * 0.3,
    paddingVertical: height * 0.015,
    backgroundColor: "#DBF120",
    overflow: "hidden",
    borderWidth: width * 0.01,
    borderColor: "#F16220",
    borderRadius: width * 0.03
  }
})