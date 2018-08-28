import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Platform
} from "react-native";
import styles from "./styles";
import { Linking } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";

const Speaker = ({ navigation, data }) => {
  return (
    <View style={styles.body}>
      <View styles={styles.header}>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <Text style={styles.title}>About the Speaker</Text>
        </TouchableHighlight>
      </View>
      <ScrollView>
        <View style={styles.speakerAbout}>
          <Image style={styles.speakerImg} source={{ uri: data.image }} />
          <Text style={styles.speakerName}>{data.name}</Text>
          <Text style={styles.speakerBio}>{data.bio}</Text>
          <View style={styles.button}>
            <LinearGradient
              colors={["#9963ea", "#8797D6"]}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 0.0 }}
              style={{
                height: 50,
                width: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: 50,
                marginTop: 20
              }}
            >
              <TouchableOpacity onPress={() => Linking.openURL(data.url)}>
                <Text style={styles.buttonText}>Read More on Wikipedia</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Speaker;
