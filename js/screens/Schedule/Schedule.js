import React from "react";
import {
  Text,
  View,
  ScrollView,
  SectionList,
  TouchableHighlight
} from "react-native";

const Schedule = ({ data }) => {
  return (
    <View>
      <ScrollView>
        <SectionList
          renderItem={({ item }) => (
            <View keyExtractor={item => item.id}>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => <Text />}
          sections={data}
        />
      </ScrollView>
    </View>
  );
};

export default Schedule;
