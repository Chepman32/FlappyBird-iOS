import React, { useEffect } from "react"
import { Platform, View, Text, StyleSheet } from "react-native"
import * as RNIap from 'react-native-iap';
import { Selector } from "./Selector"
export const Store = () => {
    useEffect( async () => {
      try {
        const products = await RNIap.getProducts(itemSkus);
        console.log({ products });
      } catch(err) {
        console.warn(err); // standardized err.code and err.message available
      }
    })
    const itemSkus = Platform.select({
        ios: [
          '   com.Chepman32.FBRemastered'
        ],
        android: [
          'com.Chepman32.FBRemastered'
        ]
      });
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
    text: {
        fontSize: 30,
        fontWeight: "500"
    },
})