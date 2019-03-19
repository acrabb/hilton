import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { FlatList, NavigationScreenProp } from "react-navigation"
import Apollo from "../../Apollo"
import { ListSeparator, NavHeader } from "../../components/ui"
import Reservation from "../Reservation"
import ReservationListItem from "../ReservationListItem"

type Props = {
  navigation: NavigationScreenProp<any, any>
}

type State = {
  data?: Reservation[]
}

export default class ViewReservation extends Component<Props, State> {
  static navigationOptions = () => {
    return {
      headerTitle: <NavHeader />,
      headerStyle: { borderBottomWidth: 0 /*ios*/, elevation: 0 },
    }
  }
  constructor(props: Props) {
    super(props)

    this.state = {
      data: undefined,
    }
  }

  componentDidMount() {
    Apollo.getInstance()
      .getReservations()
      .then(data => {
        this.setState(previous => ({
          data: data.data.reservations,
        }))
      })
  }

  _renderReservationItem = ({ item }: { item: Reservation }) => {
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
        {this.state.data && <Text style={styles.infoText}>Here are all the reservations on file.</Text>}
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
    textAlign: "center",
    fontWeight: "bold",
  },
})
