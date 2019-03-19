import ApolloClient, { gql } from "apollo-boost"
import Reservation from "./reservations/Reservation"

const apollo = new ApolloClient({
  uri: "https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev",
})

export async function getReservations(): Promise<any> {
  let data = await apollo
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
    .catch(error => console.error(error))
  return data
}

export async function createReservation(reservation: Reservation): Promise<any> {
  let data = await apollo
    .mutate({
      mutation: gql`
        mutation createIt($data: ReservationCreateInput!) {
          createReservation(data: $data) {
            id
          }
        }
      `,
      variables: {
        data: {
          ...reservation,
        },
      },
    })
    .catch(error => console.error(error))

  return data
}
