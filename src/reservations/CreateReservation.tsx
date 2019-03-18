import React, { Component } from "react"
import { Button, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import uuidv4 from "uuid/v4"
import Reservation from "./Reservation"

const LableledItem = ({ label, children }) => (
  <View
    style={{
      // flex: 1,
      flexDirection: "row",
      width: "100%",
      // backgroundColor: "red",
    }}
  >
    <Text
      style={{
        padding: 5,
        width: "30%",
        textAlign: "right",
        ...styles.text,
      }}
    >
      {label}
    </Text>
    {children}
  </View>
)

type State = {
  uuid: string
  userName: string
  hotelName: string
  arrivalDate: Date
  departureDate: Date
}

export default class CreateReservation extends Component<{}, State> {
  constructor(props) {
    super(props)

    this.state = {
      uuid: uuidv4(),
      userName: "",
      hotelName: "",
      arrivalDate: new Date(),
      departureDate: new Date(),
    }
  }

  componentDidMount() {
    // TODO
    // Query from GraphQL - use apollo client
  }

  _createNewReservation = (): Reservation => {
    return new Reservation(
      this.state.uuid,
      this.state.userName,
      this.state.hotelName,
      this.state.arrivalDate.toDateString(),
      this.state.departureDate.toDateString()
    )
  }

  _onArrivalDateChange = (newDate: Date): void => {
    console.log(`new date: ${newDate}`)
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <KeyboardAvoidingView style={styles.container}>
          <Text style={{ ...styles.text, padding: 10, fontWeight: "900" }}>
            Great! Let's get the details...
          </Text>

          <LableledItem label='Your Name:'>
            <TextInput style={styles.input} placeholder='Your name...' />
          </LableledItem>
          <LableledItem label='Hotel:'>
            <TextInput style={styles.input} placeholder='Hotel name...' />
          </LableledItem>
          <LableledItem label='Arrival:'>
            <TextInput
              style={[styles.input, styles.text]}
              value={this.state.arrivalDate.toDateString()}
              editable={false}
            />
          </LableledItem>
          <LableledItem label='Departure:'>
            <TextInput
              style={styles.input}
              value={this.state.departureDate.toDateString()}
              editable={false}
            />
          </LableledItem>
          <Button title='All Done' onPress={this._createNewReservation} />

          {/* {Platform.OS === "ios" && (
            <DatePickerIOS style={styles.dates} date={new Date()} onDateChange={this._onArrivalDateChange} />
          )} */}
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 20,
  },
  input: {
    padding: 5,
    width: "80%",
    fontSize: 16,
  },
  dates: {
    // backgroundColor: "red",
    width: "100%",
    // height: 100,
  },
  text: {
    fontSize: 16,
  },
})
