import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { NavigationScreenProp } from "react-navigation"

type Props = {
  navigation: NavigationScreenProp<any, any>
}

export default class ViewReservation extends Component<Props, {}> {
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
