import React, { Component } from "react";
import { Text, ScrollView, TouchableHighlight } from "react-native";
import Moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";

export const SingleSession = ({ data, navigation, favIds }) => {
  const favIdArr = [];
  favIds.favIds.map(item => favIdArr.push(item.id));
  const favedSessions = favIdArr.includes(data.Session.id);
  return (
    <ScrollView>
      <Text>{data.Session.title}</Text>
      <Text>{data.Session.location}</Text>
      <Text>{Moment(data.Session.startTime).format("h:mm A")}</Text>
      <Text>{data.Session.speaker.name}</Text>
      {!favedSessions ? (
        <TouchableHighlight
          onPress={() => {
            favIds.addFav(data.Session.id);
          }}
        >
          <Text> Add to Favs </Text>
        </TouchableHighlight>
      ) : (
        <TouchableHighlight
          onPress={() => {
            favIds.removeFav(data.Session.id);
          }}
        >
          <Text> Remove from Favs </Text>
        </TouchableHighlight>
      )}
    </ScrollView>
  );
};
