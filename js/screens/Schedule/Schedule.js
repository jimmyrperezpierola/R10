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

const Schedule = ({ data, navigation, favIds }) => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <SessionList data={data} navigation={navigation} favIds={favIds} />
      </View>
    </View>
  );
};

export default Schedule;
