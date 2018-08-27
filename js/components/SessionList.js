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

export const SessionList = ({ data, nav }) => {
  return (
    <ScrollView>
      <SectionList
        renderItem={({ item }) => (
          console.log(item),
          (
            <TouchableHighlight onPress={() => nav(item.id)}>
              <View>
                <Text>{item.title}</Text>
                <Text>{item.location}</Text>
              </View>
            </TouchableHighlight>
          )
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text>{Moment(title).format("h:mm A")}</Text>
        )}
        sections={data}
        keyExtractor={(item, index) => item + index}
      />
    </ScrollView>
  );
};
