import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from "react-native";
import Moment from "moment";
import styles from "./styles";

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
      {!data.Session.speaker ? (
        <Text />
      ) : (
        <View>
          <Text>Presented by:</Text>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("Speaker", {
                speakerId: data.Session.speaker.id
              });
            }}
          >
            <View>
              {!data.Session.speaker.image ? (
                <Text />
              ) : (
                <Image
                  source={{ uri: data.Session.speaker.image }}
                  style={{ height: 100, width: 100 }}
                />
              )}
              <Text>{data.Session.speaker.name}</Text>
            </View>
          </TouchableHighlight>
        </View>
      )}
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
