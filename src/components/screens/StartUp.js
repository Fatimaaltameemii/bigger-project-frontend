import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import homeimg from "../../../assets/homebackground.jpg";

const StartUP = ({ navigation }) => {
  return (
    <View>
      <ImageBackground source={homeimg} style={styles.image}>
        <Text>hello from our Start up page</Text>
      </ImageBackground>
    </View>
  );
};

export default StartUP;

const styles = StyleSheet.create({
  image: {
    flex: 2,
    width: 400,
  },
});