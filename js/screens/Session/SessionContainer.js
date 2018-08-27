import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import FavsContext from "../../context/FavsContext";

export default class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };

  render() {
    sessionId = this.props.navigation.getParam("Id");

    const SessionQuery = gql`
      query($id: ID) {
        Session(id: $id) {
          description
          title
          startTime
          location
          speaker {
            image
            name
            id
          }
          id
        }
      }
    `;

    return (
      //
      <Query query={SessionQuery} variables={{ id: sessionId }}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error</Text>;
        }}
      </Query>
    );
  }
}
