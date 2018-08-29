import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import Schedule from "./Schedule.js";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { formatSessionData } from "../../lib/FormatSessions";
import FavsContext from "../../context/FavsContext";

export const ScheduleData = gql`
  {
    allSessions {
      title
      description
      startTime
      location
      id
    }
  }
`;

export default class ScheduleContainer extends Component {
  static navigationOptions = { title: "Schedule" };

  render() {
    return (
      <Query query={ScheduleData}>
        {({ loading, error, data: { allSessions } }) => {
          if (loading) return <ActivityIndicator size="large" />;
          if (error) return <Text>Error</Text>;

          return (
            <FavsContext.Consumer>
              {values => {
                const favArr = [];
                values.favIds.map(item => favArr.push(item.id));
                return (
                  <Schedule
                    navigation={this.props.navigation}
                    data={formatSessionData(allSessions)}
                    favIds={favArr}
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
