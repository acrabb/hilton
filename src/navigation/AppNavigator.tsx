import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation"
import ReservationsCreateScreen from "../reservations/CreateReservation"
import ReservationsViewScreen from "../reservations/ViewReservations"
import ReservationsWelcomeScreen from "../reservations/WelcomeReservations"
import * as Nav from "./navConsts"

const ReservationsStack = createStackNavigator(
  {
    Welcome: { screen: ReservationsWelcomeScreen },
    View: { screen: ReservationsViewScreen },
    Create: { screen: ReservationsCreateScreen },
  },
  {
    initialRouteName: Nav.NAV_STACK_WELCOME,
    // initialRouteParams: {
    //   showOnboarding: true,
    // },
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      SwitchReserve: ReservationsStack,
      // TODO Maybe later
      // SwitchLaunch: createStackNavigator({ Launch: { screen: LaunchScreen } }),
      // SwitchOnboard: createStackNavigator({ Onboarding: { screen: OnboardScreen } }),
    },
    {
      initialRouteName: Nav.NAV_SWITCH_RESERVE,
    }
  )
)
