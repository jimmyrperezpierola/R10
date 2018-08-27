import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button
} from "react-native";
import AboutScreen from "./screens/About";
import RootStackNavigator from "./navigation/RootStackNavigation";
import { ApolloProvider } from "react-apollo";
import client from "./config/api.js";
import { addToFav, getFav, removeFav } from "./config/models";
import { FavProvider } from "./context/FavsContext";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favs: [],
      nextId: null
    };
  }
  componentDidMount() {
    this.setState({ favs: getFav() });
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <FavProvider>
          <RootStackNavigator />
        </FavProvider>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
