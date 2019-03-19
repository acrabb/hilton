/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import "react-native"
import CreateReservation from "../src/reservations/screens/CreateReservation"

it("checks the guest name", () => {
  let createScreen = new CreateReservation({})
  // renderer.create(<CreateReservation />)
  createScreen.setState(() => ({
    hotelName: "some hotel",
    arrivalDate: new Date(),
    departureDate: new Date(),
  }))

  let res = createScreen._createNewReservation()
  if (res) {
    fail("reservation should not be created if guest name isn't available")
  }
})
