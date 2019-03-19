/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import CreateReservation from "../src/reservations/screens/CreateReservation"

describe("createReservation", () => {
  let createScreen: CreateReservation
  beforeEach(() => {
    createScreen = new CreateReservation({})
  })

  it("checks the guest name", () => {
    createScreen.state = {
      clientName: "",
      hotelName: "Hilton Hi",
      arrivalDate: new Date(),
      departureDate: new Date(),
      isDateTimePickerVisible: false,
      focusedDate: "arrival",
      errors: [],
    }

    let res = createScreen._createNewReservation()
    expect(res).toBeNull()
  })

  it("checks the hotel name", () => {
    createScreen.state = {
      clientName: "Paris",
      hotelName: "",
      arrivalDate: new Date(),
      departureDate: new Date(),
      isDateTimePickerVisible: false,
      focusedDate: "arrival",
      errors: [],
    }

    let res = createScreen._createNewReservation()
    expect(res).toBeNull()
  })

  it("checks the departure date", () => {
    createScreen.state = {
      clientName: "Paris",
      hotelName: "Hilton Hi",
      arrivalDate: new Date(),
      departureDate: new Date(),
      isDateTimePickerVisible: false,
      focusedDate: "arrival",
      errors: [],
    }

    let res = createScreen._createNewReservation()
    expect(res).toBeNull()
  })

  it("creates a valid reservation", () => {
    let departure = new Date()
    departure.setDate(departure.getDate() + 1)
    createScreen.state = {
      clientName: "Paris",
      hotelName: "Hilton Hi",
      arrivalDate: new Date(),
      departureDate: departure,
      isDateTimePickerVisible: false,
      focusedDate: "arrival",
      errors: [],
    }

    let res = createScreen._createNewReservation()
    expect(res).toBeDefined()
  })
})

describe("showing the date picker", () => {
  let createScreen: CreateReservation
  beforeEach(() => {
    createScreen = new CreateReservation({})
  })

  it("toggles the date picker flag", () => {
    createScreen.state = {
      clientName: "",
      hotelName: "Hilton Hi",
      arrivalDate: new Date(),
      departureDate: new Date(),
      isDateTimePickerVisible: false,
      focusedDate: "arrival",
      errors: [3],
    }

    createScreen._showDateTimePicker("departure")
    expect(createScreen.state.isDateTimePickerVisible).toBeTruthy()
    expect(createScreen.state.focusedDate).toEqual("departure")
    expect(createScreen.state.errors).toHaveLength(0)
  })
})
