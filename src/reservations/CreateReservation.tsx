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
import * as Apollo from "../apollo"
import { LableledItem, NavHeader } from "../components/ui"
import Reservation from "./Reservation"

type Props = {
  navigation: NavigationScreenProp<any, any>
}

type State = {
  clientName: string
  hotelName: string
  arrivalDate: Date
  departureDate: Date
  isDateTimePickerVisible: boolean
  focusedDate: "arrival" | "departure"
}

export default class CreateReservation extends Component<Props, State> {
  static navigationOptions = ({ navigation }: NavigationScreenProp<any, any>) => {
    return {
      headerTitle: <NavHeader />,
      headerStyle: { borderBottomWidth: 0 /*ios*/, elevation: 0 },
    }
  }

  constructor(props) {
    super(props)

    this.state = {
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

  _createNewReservation = () => {
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

    console.warn("CREATING new reservation")
    let res = new Reservation(
      this.state.clientName,
      this.state.hotelName,
      this.state.arrivalDate.toDateString(),
      this.state.departureDate.toDateString()
    )

    Apollo.createReservation(res)
  }

  _showDateTimePicker = (whichDate: "arrival" | "departure") => {
    Keyboard.dismiss()
    this.setState(previous => ({
      focusedDate: whichDate,
      isDateTimePickerVisible: true,
    }))
  }

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = (date: Date, whichDate: string) => {
    // TODO check that departure date is after arrival date
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
          <Text style={{ fontSize: 16, padding: 10, fontWeight: "bold" }}>
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
    padding: 20,
  },
  input: {
    width: "80%",
    fontSize: 16,
    padding: 0, // for Android
  },
})
