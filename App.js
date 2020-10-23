import React from "react";
import { View } from "react-native";
import MainView from "./View/MainView";
import PinCodeView from "./View/PinCodeView";
import AdminView from "./View/AdminView";
import UserDisplayView from "./View/UserDisplayView";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator(
  {
    MainView: {
      screen: MainView,
      navigationOptions: { 
        headerShown: false,
      } 
    },
    PinCodeView: {
      screen: PinCodeView,
      navigationOptions: {
        headerShown: false,
      },
    },
    AdminView: {
      screen: AdminView,
      navigationOptions: {
        header: null,
      },
    },
    UserDisplayView: {
      screen: UserDisplayView,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "MainView",
  }
);
const AppContainer = createAppContainer(AppNavigator);

function App() {
  return <AppContainer />;
}

export default App;
