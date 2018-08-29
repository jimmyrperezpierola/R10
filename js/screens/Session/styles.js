import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    height: "100%"
  },
  container: {
    marginRight: 10,
    marginLeft: 10,
    fontFamily: "Montserrat"
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontFamily: "Montserrat",
    color: "black"
  },
  heart: {
    position: "absolute",
    right: 0,
    paddingTop: 10
  },
  location: {
    color: "#999999",
    paddingTop: 10,
    fontFamily: "Montserrat"
  },
  sessionTime: {
    color: "#cf392a",
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: "Montserrat"
  },
  description: {
    fontSize: 20,
    paddingBottom: 10,
    fontFamily: "Montserrat",
    color: "black"
  },
  presented: {
    color: "#999999",
    fontSize: 20,
    paddingBottom: 10,
    fontFamily: "Montserrat"
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
    top: 10,
    fontFamily: "Montserrat",
    color: "black"
  },
  FavText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    padding: 15,
    fontFamily: "Montserrat"
  }
});

export default styles;
