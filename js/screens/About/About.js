import React from "react";
import {
  Text,
  StatusBar,
  View,
  ScrollView,
  Image,
  Fragment
} from "react-native";
import styles from "./styles";

const About = aboutPage => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <Image
          source={require("../../assets/images/r10_logo.png")}
          style={styles.logo}
        />
        <View style={styles.textBody}>
          <Text>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Text>
          <Text>Date & Venue</Text>
          <Text>
            The R10 conference will take place on Tuesday, August 28, 2018 in
            Vancouver, BC.
          </Text>
          <Text>Code of Conduct</Text>
          {aboutPage.aboutPage.map(aboutPage => (
            <View key={aboutPage.id}>
              <Text>{`${aboutPage.title}`}</Text>
              <Text>{` ${aboutPage.description}`}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.copyright}>&copy; RED Academy 2018</Text>
      </ScrollView>
    </View>
  );
};

export default About;
