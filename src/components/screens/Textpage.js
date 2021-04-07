import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import StyledButton from "../StyledButton";
import chatpic from "../../../assets/chatpic.jpg";
const Textpage = ({ navigation }) => {
  return (
    <ImageBackground source={chatpic} style={styles.image}>
      <Text>hello</Text>
    </ImageBackground>
  );
};

export default Textpage;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 372,
    alignSelf: "center",
  },
});
