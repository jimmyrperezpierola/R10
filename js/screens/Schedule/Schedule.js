import React from "react";
import {
  Text,
  View,
  ScrollView,
  SectionList,
  TouchableHighlight
} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import SessionList from "../../components/SessionList";

const Schedule = ({ data, navigation }) => {
  return <SessionList data={data} navigation={navigation} />;
};

export default Schedule;
