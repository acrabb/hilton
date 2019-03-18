/*
  type Reservation
    implements Node {
      id: ID!
      name: String!
      hotelName: String!
      arrivalDate: String!
      departureDate: String!
    }
 */
export default class Reservation {
  constructor(
    public id: string,
    public name: string,
    public hotelName: string,
    public arrivalDate: string,
    public departureDate: string
  ) {
    this.id = id
    this.name = name
    this.hotelName = hotelName
    this.arrivalDate = arrivalDate
    this.departureDate = departureDate
  }
}
