import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sessionHeader: {
    backgroundColor: "#e6e6e6",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    fontFamily: "Montserrat"
  },
  sessionItem: {
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1.5,
    fontFamily: "Montserrat"
  },
  title: {
    fontSize: 15,
    color: "black",
    paddingTop: 5,
    fontFamily: "Montserrat"
  },
  location: {
    fontSize: 15,
    color: "#999999",
    paddingTop: 5,
    fontFamily: "Montserrat"
  },
  heartIcon: {
    position: "absolute",
    right: 10,
    bottom: 20
  }
});

export default styles;
