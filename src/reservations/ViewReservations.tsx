import ApolloClient, { gql } from "apollo-boost"
import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { FlatList, NavigationScreenProp } from "react-navigation"
import ReservationListItem from "../components/ReservationListItem"
import { ListSeparator } from "../components/ui"
import Reservation from "./Reservation"

type Props = {
  navigation: NavigationScreenProp<any, any>
}

type State = {
  data?: Reservation[]
}

export default class ViewReservation extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      data: undefined,
    }
  }

  componentDidMount() {
    // TODO
    // Query from GraphQL - use apollo client
    const apollo = new ApolloClient({
      uri: "https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev",
    })
    apollo
      .query({
        query: gql`
          query Reservations {
            reservations {
              id
              name
              hotelName
              arrivalDate
              departureDate
            }
          }
        `,
      })
      .then(data => {
        this.setState(previous => ({
          data: data.data.reservations,
        }))
      })
      .catch(error => console.error(error))
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
        {!this.state.data && <Text>Loading reservations...</Text>}
        {this.state.data && (
          <Text style={{ fontSize: 16, padding: 10, fontWeight: "900" }}>
            Here are all the reservations on file...
          </Text>
        )}
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
    backgroundColor: "#F5FCFF",
  },
})
