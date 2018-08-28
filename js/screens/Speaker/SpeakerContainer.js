import React, { Component } from "react";
import Speaker from "./Speaker";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text, View, ActivityIndicator } from "react-native";

export default class SpeakerContainer extends Component {
  static navigationOptions = {
    title: "About the Speaker"
  };

  render() {
    speakerId = this.props.navigation.getParam("speakerId");

    const speakerQuery = gql`
      query($id: ID) {
        Speaker(id: $id) {
          url
          bio
          image
          name
        }
      }
    `;

    return (
      <Query query={speakerQuery} variables={{ id: speakerId }}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error</Text>;

          return (
            <Speaker navigation={this.props.navigation} data={data.Speaker} />
          );
        }}
      </Query>
    );
  }
}
