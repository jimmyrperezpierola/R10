import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import Moment from "moment";

export const SingleSession = ({ data, addFav, removeFav }) => {
  return (
    <View>
      <Text>{data.Session.title}</Text>
      <Text>{data.Session.location}</Text>
      <Text>{Moment(data.Session.startTime).format("h:mm A")}</Text>
      <Text>{data.Session.speaker.name}</Text>
      <TouchableHighlight onPress={() => addFav(data.Session.id)}>
        <Text>Add to Favs</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => removeFav(data.Session.id)}>
        <Text>Remove from Favs</Text>
      </TouchableHighlight>
    </View>
  );
};
