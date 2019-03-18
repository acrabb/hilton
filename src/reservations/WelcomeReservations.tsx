import React, { Component } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { NavigationScreenProp } from "react-navigation"
import * as Nav from "../navigation/navConsts"

type Props = {
  navigation: NavigationScreenProp<any, any>
}

export default class WelcomeReservations extends Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    // TODO load data here so its ready when user hits View
  }

  _onPressCreate = () => {
    this.props.navigation.navigate(Nav.NAV_STACK_CREATE)
  }
  _onPressView = () => {
    this.props.navigation.navigate(Nav.NAV_STACK_VIEW)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Hilton Reservations</Text>
        <Text style={styles.instructions}>
          Would you like to view your reservations,{"\n"}or book a new one?
        </Text>

        <Button title='View' onPress={this._onPressView} />
        <Button title='Create' onPress={this._onPressCreate} />
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
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
})
