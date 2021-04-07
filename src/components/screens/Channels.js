import React from "react";
import {
  View,
  Text,
  ListView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import channelpic from "../../../assets/channelpic.jpg";

const Channels = ({ navigation }) => {
  return (
    <ImageBackground source={channelpic} style={styles.image}>
      <Text style={styles.owViewContainer}>channels</Text>
      <View style={styles.separator}></View>
    </ImageBackground>
  );
};

export default Channels;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 372,
    alignSelf: "center",
  },
  owViewContainer: {
    flex: 1,
    paddingRight: 15,
    paddingTop: 13,
    paddingBottom: 13,
    borderBottomWidth: 0.5,
    borderColor: "#c9c9c9",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 20,
    marginLeft: 10,
  },
  separator: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#000",
  },
});
