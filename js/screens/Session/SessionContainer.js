import React, { Component } from "react";
import Session from "./Session";
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

export default class SessionContainer extends Component {
  static navigationOptions = { title: "Session" };
  render() {
    return <Session />;
  }
}
