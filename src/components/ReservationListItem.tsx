import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { LableledItem } from "./ui"

type MyProps = {
  id: string
  clientName: string
  hotelName: string
  arrivalDate: string
  departureDate: string
  style?: any
}

export default class ReservationListItem extends React.Component<MyProps, {}> {
  constructor(props: MyProps) {
    super(props)
  }

  render() {
    var stys = styles.text

    return (
      <View style={[styles.container, this.props.style]}>
        <LableledItem label='Name:'>
          <Text style={stys}>{this.props.clientName}</Text>
        </LableledItem>
        <LableledItem label='Hotel:'>
          <Text style={stys}>{this.props.hotelName}</Text>
        </LableledItem>
        <LableledItem label='Dates:'>
          <Text style={stys}>
            {this.props.arrivalDate} - {this.props.departureDate}
          </Text>
        </LableledItem>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
})
