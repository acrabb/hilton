import ApolloClient, { gql } from "apollo-boost"
import "cross-fetch/polyfill"
import Reservation from "./reservations/Reservation"

const RESERVATIONS_QUERY = gql`
  query Reservations {
    reservations {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`
const RESERVATIONS_MUTATION = gql`
  mutation createIt($data: ReservationCreateInput!) {
    createReservation(data: $data) {
      id
    }
  }
`

export default class Apollo {
  public static getInstance(): Apollo {
    return Apollo._instance
  }

  private static _instance: Apollo = new Apollo()
  private client: ApolloClient<{}>

  constructor() {
    if (Apollo._instance) {
      throw new Error("Error: Instantiation failed: Use getInstance() instead of new.")
    }
    this.client = new ApolloClient({
      uri: "https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev",
    })
    Apollo._instance = this
  }

  public async getReservations(): Promise<any> {
    let data = await this.client
      .query({
        query: RESERVATIONS_QUERY,
      })
      .catch((error: any) => console.error(error))
    return data
  }

  async createReservation(reservation: Reservation): Promise<any> {
    let data = await this.client
      .mutate({
        mutation: RESERVATIONS_MUTATION,
        variables: {
          data: {
            ...reservation,
          },
        },
      })
      .catch((error: any) => console.error(error))

    return data
  }
}
