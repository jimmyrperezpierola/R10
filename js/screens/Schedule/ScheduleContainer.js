import React, { Component } from "react";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";
import { formatSessionData } from "../../lib/FormatSessions";

export const ScheduleData = gql`
  {
    allSessions {
      title
      description
      startTime
      location
    }
  }
`;

export default class ScheduleContainer extends Component {
  static navigationOptions = { title: "Schedule" };
  render() {
    return (
      <Query query={ScheduleData}>
        {({ loading, error, data: { allSessions } }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;

          return <Schedule data={formatSessionData(allSessions)} />;
        }}
      </Query>
    );
  }
}
