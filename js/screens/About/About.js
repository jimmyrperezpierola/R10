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
import Conducts from "../../components/Conducts/Conducts";

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
          <Text style={styles.aboutText}>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Text>
          <Text style={styles.aboutH1}>Date & Venue</Text>
          <Text style={styles.aboutText}>
            The R10 conference will take place on Tuesday, August 28, 2018 in
            Vancouver, BC.
          </Text>
          <Text style={styles.aboutH1}>Code of Conduct</Text>
          {aboutPage.aboutPage.map((data, about) => {
            return <Conducts data={data} key={about} />;
          })}
        </View>
        <Text style={styles.copyright}>&copy; RED Academy 2018</Text>
      </ScrollView>
    </View>
  );
};

export default About;
