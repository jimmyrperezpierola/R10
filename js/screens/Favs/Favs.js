import React from "react";
import { Text, View, ScrollView } from "react-native";
import SessionList from "../../components/SessionList";
import { formatSessionData } from "../../lib/FormatSessions";

const Favs = ({ data, navigation, favIds }) => {
  return (
    <ScrollView>
      <SessionList
        data={formatSessionData(data)}
        navigation={navigation}
        favIds={favIds}
      />
    </ScrollView>
  );
};

export default Favs;
