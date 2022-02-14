import React from "react"
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { Selector } from "./Selector"
export const Store = () => {
    return (
        <View style={styles.container}>
      <Selector/>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: "space-around",
        alignItems: "center",
      },
    row: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        fontSize: 30,
        fontWeight: "500"
    },
})