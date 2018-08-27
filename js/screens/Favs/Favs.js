import React from "react";
import { Text, View, ScrollView } from "react-native";
import SessionList from "../../components/SessionList";
import { formatSessionData } from "../../lib/FormatSessions";

const Favs = ({ data, navigation, favIds }) => {
  return (
    <ScrollView>
      <SessionList
        data={data}
        navigation={nav}
        favIds={formatSessionData(favIds)}
      />
    </ScrollView>
  );
};

export default Favs;
