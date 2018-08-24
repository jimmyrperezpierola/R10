import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Schedule from "../screens/Schedule";
import About from "../screens/About";
import Favs from "../screens/Favs";
import Map from "../screens/Map";
import Icons from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config";

const mapStack = createStackNavigator(
  {
    Map: {
      screen: Map
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const aboutStack = createStackNavigator(
  {
    About: {
      screen: About
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const favsStack = createStackNavigator(
  {
    Favs: {
      screen: Favs
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const scheduleStack = createStackNavigator(
  {
    Schedule: {
      screen: Schedule
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const renderIcon = (iconName, tintColor) => {
  return <Icons name={iconName} size={25} color={tintColor} />;
};

aboutStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-information-circle", tintColor)
};
mapStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-map", tintColor)
};
scheduleStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-calendar", tintColor)
};
favsStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-heart", tintColor)
};
export default createDrawerNavigator({
  Schedule: scheduleStack,
  Map: mapStack,
  Favs: favsStack,
  About: aboutStack
});
