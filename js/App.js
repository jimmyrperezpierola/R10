import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AboutScreen from "./screens/About";
import RootStackNavigator from "./navigation/RootStackNavigation";
// import { ApolloProvider } from "react-apollo";
// import { render } from "react-dom";

// const App = () => (
//   <ApolloProvider client={client}>
//     <RootStackNavigator />;
//   </ApolloProvider>
// );

export default class App extends Component {
  render() {
    return <RootStackNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

// render(<App />, document.getElementById("root"));
