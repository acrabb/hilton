/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import AppNavigator from "./src/navigation/AppNavigator"

/*
  DESCRIPTION
  Create a React Native reservation app using ES6 and pure components.
  Create at least 2 screens:
    1 for listing the existing reservations
    and 1 for adding a new reservation.
*/

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#F5FCFF",
    backgroundColor: "red",
  },
})
