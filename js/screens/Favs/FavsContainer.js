import React, { Component } from "react";
import Favs from "./Favs";
import FavsContext from "../../context/FavsContext";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ActivityIndicator } from "react-native";

export default class FavsContainer extends Component {
  static navigationOptions = {
    title: "Favs"
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              startTime
              location
              title
              id
            }
          }
        `}
      >
        {({ loading, error, data: { allSessions } }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error</Text>;
          return (
            <FavsContext.Consumer>
              {values => {
                const favArr = [];
                values.favIds.map(item => favArr.push(item.id));

                const favSessions = allSessions.filter(session =>
                  favArr.includes(session.id)
                );
                let data = favSessions;

                return (
                  <Favs
                    navigation={this.props.navigation}
                    favIds={favArr}
                    data={data}
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
