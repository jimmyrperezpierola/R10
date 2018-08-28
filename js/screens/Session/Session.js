import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  Platform
} from "react-native";
import moment from "moment";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

export const SingleSession = ({ data, navigation, favIds }) => {
  const favIdArr = [];
  favIds.favIds.map(item => favIdArr.push(item.id));
  const favedSessions = favIdArr.includes(data.Session.id);
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.location}>{data.Session.location}</Text>
          {!favedSessions ? (
            <Text />
          ) : (
            <Icon style={styles.heart} name="md-heart" size={20} color="red" />
          )}
          <Text style={styles.title}>{data.Session.title}</Text>
          <Text style={styles.sessionTime}>
            {moment(data.Session.startTime).format("h:mm A")}
          </Text>
          <Text style={styles.description}>{data.Session.description}</Text>
          {!data.Session.speaker ? (
            <Text />
          ) : (
            <View>
              <Text style={styles.presented}>Presented by:</Text>
              <TouchableHighlight
                onPress={() => {
                  navigation.navigate("Speaker", {
                    speakerId: data.Session.speaker.id
                  });
                }}
              >
                <View style={styles.speaker}>
                  {!data.Session.speaker.image ? (
                    <Text />
                  ) : (
                    <Image
                      source={{ uri: data.Session.speaker.image }}
                      style={styles.speakerImage}
                    />
                  )}
                  <Text style={styles.speakerName}>
                    {data.Session.speaker.name}
                  </Text>
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
      </View>
    </View>
  );
};
