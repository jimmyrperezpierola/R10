import React from "react";
import { Text, View, ScrollView } from "react-native";
import SessionList from "../../components/SessionList";
import { formatSessionData } from "../../lib/FormatSessions";
import styles from "./styles";

const Favs = ({ data, navigation, favIds }) => {
  return (
    <View style={styles.container}>
      <SessionList
        data={formatSessionData(data)}
        navigation={navigation}
        favIds={favIds}
      />
    </View>
  );
};

export default Favs;
