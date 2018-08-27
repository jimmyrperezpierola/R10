import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import Moment from "moment";

export const SingleSession = ({ data, addFav, removeFav }) => {
  return (
    <View>
      <Text>{data.Session.title}</Text>
      <Text>{data.Session.location}</Text>
      <Text>{Moment(data.Session.startTime).format("h:mm A")}</Text>
      <Text>{data.Session.speaker.name}</Text>
      <Button title="add to favs" onPress={() => addFav(data.Session.id)} />
      <Button
        title="remove from favs"
        onPress={() => removeFav(data.Session.id)}
      />
    </View>
  );
};
