import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"

export default class ViewReservation extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // TODO
    // Query from GraphQL - use apollo client
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading reservations...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
})
