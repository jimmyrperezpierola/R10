import React from "react";
import {
  Text,
  View,
  ScrollView,
  SectionList,
  TouchableHighlight
} from "react-native";
import PropTypes from "prop-types";

import SessionList from "../../components/SessionList";

const Schedule = ({ data, nav }) => {
  return <SessionList data={data} nav={nav} />;
};

export default Schedule;
