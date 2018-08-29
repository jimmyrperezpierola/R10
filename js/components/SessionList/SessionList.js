import React from "react";
import {
  ScrollView,
  SectionList,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Platform
} from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const SessionList = ({ data, navigation, favIds }) => {
  return (
    <ScrollView>
      <SectionList
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => navigation.navigate("Session", { itemId: item.id })}
          >
            <View style={styles.sessionItem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
              {!favIds.includes(item.id) ? (
                <Text />
              ) : (
                <Icon
                  style={styles.heartIcon}
                  name={Platform.select({
                    ios: "ios-heart",
                    android: "md-heart"
                  })}
                  size={18}
                  color="red"
                />
              )}
              <Text>{item.name}</Text>
            </View>
          </TouchableHighlight>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sessionHeader}>
            {moment(title).format("h:mm A")}
          </Text>
        )}
        sections={data}
        keyExtractor={(item, index) => item + index}
      />
    </ScrollView>
  );
};

export default SessionList;
