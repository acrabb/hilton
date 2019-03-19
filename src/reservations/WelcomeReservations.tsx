import React, { Component } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { NavigationScreenProp } from "react-navigation"
import { NavHeader } from "../components/ui"
import * as Nav from "../navigation/navConsts"

type Props = {
  navigation: NavigationScreenProp<any, any>
}

export default class WelcomeReservations extends Component<Props, {}> {
  static navigationOptions = ({ navigation }: NavigationScreenProp<any, any>) => {
    return {
      headerTitle: <NavHeader />,
      headerStyle: { borderBottomWidth: 0 /*ios*/, elevation: 0 },
    }
  }
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
        <Text style={styles.welcome}>Welcome to{"\n"}Hilton Reservations</Text>
        <Text style={styles.instructions}>
          Would you like to view your reservations,{"\n"}or book a new one?
        </Text>

        <View style={{ height: 100, justifyContent: "space-evenly" }}>
          <Button title='View Reservations' onPress={this._onPressView} />
          <Button title='Create Reservation' onPress={this._onPressCreate} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
  },
  welcome: {
    fontSize: 40,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    fontSize: 20,
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  button: {
    padding: 5,
  },
})
