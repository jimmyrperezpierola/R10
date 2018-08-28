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
    <View>
      <View>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <Icon
            name={Platform.select({
              ios: "ios-close",
              android: "md-close"
            })}
            size={25}
            color="white"
          />
        </TouchableHighlight>
        <Text>About the Speaker</Text>
      </View>
      <ScrollView>
        <View>
          <Image
            style={{ height: 100, width: 100 }}
            source={{ uri: data.image }}
          />
          <Text>{data.name}</Text>
          <Text>{data.bio}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(data.url)}>
            <Text>Read More on Wikipedia</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Speaker;
