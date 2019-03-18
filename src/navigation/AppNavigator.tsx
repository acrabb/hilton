import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation"
import ReservationsCreateScreen from "../reservations/CreateReservation"
import ReservationsViewScreen from "../reservations/ViewReservations"
import ReservationsWelcomeScreen from "../reservations/WelcomeReservations"
import * as Nav from "./navConsts"

const ReservationsStack = createStackNavigator(
  {
    [Nav.NAV_STACK_WELCOME]: { screen: ReservationsWelcomeScreen },
    [Nav.NAV_STACK_VIEW]: { screen: ReservationsViewScreen },
    [Nav.NAV_STACK_CREATE]: { screen: ReservationsCreateScreen },
  },
  {
    initialRouteName: Nav.NAV_STACK_WELCOME,
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      [Nav.NAV_SWITCH_RESERVE]: ReservationsStack,
      // TODO Maybe later
      // SwitchLaunch: createStackNavigator({ Launch: { screen: LaunchScreen } }),
      // SwitchOnboard: createStackNavigator({ Onboarding: { screen: OnboardScreen } }),
    },
    {
      initialRouteName: Nav.NAV_SWITCH_RESERVE,
    }
  )
)
