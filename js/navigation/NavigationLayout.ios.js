import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import About from "../screens/About";
import Map from "../screens/Map";
import Favs from "../screens/Favs";
import Schedule from "../screens/Schedule";
import Icon from "react-native-vector-icons/Ionicons";
import Session from "../screens/Session";
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
    },
    Session: {
      screen: Session
    }
  },
  {
    initialRouteName: "Favs",
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const scheduleStack = createStackNavigator(
  {
    Schedule: {
      screen: Schedule
    },
    Session: {
      screen: Session
    }
  },
  {
    initialRouteName: "Schedule",
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    About: aboutStack,
    Map: mapStack,
    Favs: favsStack,
    Schedule: scheduleStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "About") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Map") {
          iconName = `ios-map`;
        } else if (routeName === "Favs") {
          iconName = `ios-heart${focused ? "" : "-empty"}`;
        } else if (routeName === "Schedule") {
          iconName = `ios-calendar`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),

    tabBarOptions: {
      activeTintColor: "#e91e63",
      labelStyle: {
        fontFamily: "Montserrat",
        fontSize: 10
      },
      style: {
        backgroundColor: "black"
      }
    }
  }
);
