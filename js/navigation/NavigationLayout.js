import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import About from "../screens/About";
import Map from "../screens/Map";
import Favs from "../screens/Favs";
import Schedule from "../screens/Schedule";

const mapStack = createStackNavigator({
  Map: {
    screen: Map
  }
});

const aboutStack = createStackNavigator({
  About: {
    screen: About
  }
});

const favsStack = createStackNavigator({
  Favs: {
    screen: Favs
  }
});

const scheduleStack = createStackNavigator({
  Schedule: {
    screen: Schedule
  }
});

export default createBottomTabNavigator(
  {
    About: aboutStack,
    Map: mapStack,
    Favs: favsStack,
    Schedule: scheduleStack
  },
  {
    tabBarOptions: {
      activeTintColor: "#e91e63",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "beige"
      }
    }
  }
);
