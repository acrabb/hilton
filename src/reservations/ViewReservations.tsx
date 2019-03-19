import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { FlatList, NavigationScreenProp } from "react-navigation"
import * as Apollo from "../apollo"
import ReservationListItem from "../components/ReservationListItem"
import { ListSeparator, NavHeader } from "../components/ui"
import Reservation from "./Reservation"

type Props = {
  navigation: NavigationScreenProp<any, any>
}

type State = {
  data?: Reservation[]
}

export default class ViewReservation extends Component<Props, State> {
  static navigationOptions = ({ navigation }: NavigationScreenProp<any, any>) => {
    return {
      headerTitle: <NavHeader />,
      headerStyle: { borderBottomWidth: 0 /*ios*/, elevation: 0 },
    }
  }
  constructor(props) {
    super(props)

    this.state = {
      data: undefined,
    }
  }

  componentDidMount() {
    Apollo.getReservations().then(data => {
      this.setState(previous => ({
        data: data.data.reservations,
      }))
    })
  }

  _renderReservationItem = ({ item, index }) => {
    return (
      <ReservationListItem
        id={item.id}
        clientName={item.name}
        hotelName={item.hotelName}
        arrivalDate={item.arrivalDate}
        departureDate={item.departureDate}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.data && <Text style={styles.infoText}>Loading reservations...</Text>}
        {this.state.data && <Text style={styles.infoText}>Here are all the reservations on file...</Text>}
        {this.state.data && (
          <FlatList
            data={this.state.data}
            renderItem={this._renderReservationItem}
            keyExtractor={(item, index) => item.id}
            ItemSeparatorComponent={ListSeparator}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  infoText: {
    fontSize: 16,
    padding: 10,
    fontWeight: "bold",
  },
})
