import React from "react";
import {
  ScrollView,
  SectionList,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import Moment from "moment";

const SessionList = ({ data, navigation }) => {
  return (
    <ScrollView>
      <SectionList
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => navigation.navigate("Session", { itemId: item.id })}
          >
            <View>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
              <Text>{Moment(item.startTime).format("h:mm A")}</Text>
              <Text>{item.name}</Text>
            </View>
          </TouchableHighlight>
        )}
        sections={data}
        keyExtractor={(item, index) => item + index}
      />
    </ScrollView>
  );
};

export default SessionList;
