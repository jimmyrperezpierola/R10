import React from "react";
import { Text, View, ScrollView } from "react-native";

const About = aboutPage => {
  return (
    <View>
      <ScrollView>
        {aboutPage.aboutPage.map(aboutPage => (
          <View key={aboutPage.id}>
            <Text>{`${aboutPage.title}`}</Text>
            <Text>{` ${aboutPage.description}`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default About;
