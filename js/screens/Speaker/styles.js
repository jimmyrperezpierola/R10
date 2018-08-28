import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "black",
    position: "relative",
    paddingTop: 30,
    marginBottom: 10
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Montserrat"
  },

  speakerAbout: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    height: "100%",
    fontFamily: "Montserrat"
  },
  speakerImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    position: "relative"
  },
  speakerName: {
    fontSize: 25,
    color: "black",
    padding: 10,
    fontFamily: "Montserrat"
  },
  speakerBio: {
    fontSize: 15,
    color: "black",
    fontFamily: "Montserrat"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    padding: 15,
    fontFamily: "Montserrat"
  }
});

export default styles;
