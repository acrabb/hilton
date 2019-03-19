export default class Reservation {
  public id: string
  constructor(
    public name: string,
    public hotelName: string,
    public arrivalDate: string,
    public departureDate: string
  ) {
    this.name = name
    this.hotelName = hotelName
    this.arrivalDate = arrivalDate
    this.departureDate = departureDate
  }
}
