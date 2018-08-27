import React from "react";
import {
  Text,
  View,
  ScrollView,
  SectionList,
  TouchableHighlight
} from "react-native";
import PropTypes from "prop-types";

import { SessionList } from "../../components/SessionList";

const Schedule = props => {
  return <SessionList data={props.data} nav={props.nav} />;
};

export default Schedule;
