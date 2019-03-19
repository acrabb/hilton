import React, { Component } from "react"
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native"
import DateTimePicker from "react-native-modal-datetime-picker"
import { NavigationScreenProp } from "react-navigation"
import uuidv4 from "uuid/v4"
import { LableledItem } from "../components/ui"
import Reservation from "./Reservation"

type Props = {
  navigation: NavigationScreenProp<any, any>
}

type State = {
  uuid: string
  clientName: string
  hotelName: string
  arrivalDate: Date
  departureDate: Date
  isDateTimePickerVisible: boolean
  focusedDate: "arrival" | "departure"
}

export default class CreateReservation extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      uuid: uuidv4(),
      clientName: "",
      hotelName: "",
      arrivalDate: new Date(),
      departureDate: new Date(),
      isDateTimePickerVisible: false,
    }
  }

  componentDidMount() {
    // TODO
    // Query from GraphQL - use apollo client
  }

  _createNewReservation = (): Reservation | null => {
    Keyboard.dismiss()

    let clientName = this.state.clientName.trim()
    if (!clientName || clientName === "") {
      console.warn("Client name must be provided")
      // TODO color input box red
      return null
    }
    let hotelName = this.state.hotelName.trim()
    if (!hotelName || hotelName === "") {
      console.warn("Hotel name must be provided")
      // TODO color input box red
      return null
    }
    return new Reservation(
      this.state.uuid,
      this.state.clientName,
      this.state.hotelName,
      this.state.arrivalDate.toDateString(),
      this.state.departureDate.toDateString()
    )
  }

  _showDateTimePicker = (whichDate: "arrival" | "departure") => {
    this.setState(previous => ({
      focusedDate: whichDate,
      isDateTimePickerVisible: true,
    }))
  }

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = (date: Date, whichDate: string) => {
    console.log("A date has been picked: ", date)
    this._hideDateTimePicker()
    if (whichDate === "arrival") {
      this.setState(previous => ({
        arrivalDate: date,
      }))
    }
    if (whichDate === "departure") {
      this.setState(previous => ({
        departureDate: date,
      }))
    }
  }

  getDatePicker(whichDate: "arrival" | "departure") {
    return (
      <DateTimePicker
        onConfirm={date => this._handleDatePicked(date, whichDate)}
        onCancel={this._hideDateTimePicker}
        isVisible={this.state.isDateTimePickerVisible}
      />
    )
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        {this.getDatePicker(this.state.focusedDate)}
        <KeyboardAvoidingView style={styles.container}>
          <Text style={{ fontSize: 16, padding: 10, fontWeight: "900" }}>
            Great! Let's get the details...
          </Text>

          <LableledItem label='Name:'>
            <TextInput
              style={styles.input}
              placeholder="Guest's name..."
              onChangeText={text => this.setState(previous => ({ clientName: text }))}
            />
          </LableledItem>
          <LableledItem label='Hotel:'>
            <TextInput
              style={styles.input}
              placeholder='Hotel name...'
              onChangeText={text => this.setState(previous => ({ hotelName: text }))}
            />
          </LableledItem>

          <LableledItem label='Arrival:'>
            <Text style={[styles.input]} onPress={() => this._showDateTimePicker("arrival")}>
              {this.state.arrivalDate.toDateString()}
            </Text>
          </LableledItem>
          <LableledItem label='Departure:'>
            <Text style={[styles.input]} onPress={() => this._showDateTimePicker("departure")}>
              {this.state.departureDate.toDateString()}
            </Text>
          </LableledItem>

          <Button title='All Done' onPress={this._createNewReservation} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    padding: 20,
  },
  input: {
    // padding: 5,
    width: "80%",
    fontSize: 16,
  },
  dates: {
    width: "100%",
  },
})
