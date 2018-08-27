import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import FavsContext from "../../context/FavsContext";
import { SingleSession } from "./Session";

class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };

  render() {
    sessionId = this.props.navigation.getParam("itemId");

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
      <Query query={SessionQuery} variables={{ id: sessionId }}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error</Text>;
          return (
            <FavsContext.Consumer>
              {values => {
                return (
                  <SingleSession
                    data={data}
                    navigation={this.props.navigation}
                    sessionId={sessionId}
                    favIds={values}
                  />
                );
              }}
            </FavsContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

export default SessionContainer;
