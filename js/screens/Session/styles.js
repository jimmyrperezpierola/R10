import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    height: "100%"
  },
  container: {
    margin: 10,
    marginBottom: 0,
    fontFamily: "Montserrat"
  },
  title: {
    fontSize: 30,
    marginBottom: 10
  },
  heart: {
    position: "absolute",
    right: 0,
    paddingTop: 10
  },
  location: {
    color: "#999999",
    paddingTop: 10
  },
  sessionTime: {
    color: "#cf392a",
    paddingTop: 10,
    paddingBottom: 10
  },
  description: {
    fontSize: 20,
    paddingBottom: 10
  },
  presented: {
    color: "#999999",
    fontSize: 20,
    paddingBottom: 10
  },
  speaker: {
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1.5
  },
  speakerImage: {
    height: 70,
    width: 70,
    borderRadius: 35
  },
  speakerName: {
    fontSize: 20,
    position: "relative",
    padding: 10,
    top: 10
  }
});

export default styles;
