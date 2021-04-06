import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import homeimg from "../../../assets/homebackground.jpg";

const SignUp = () => {
  return (
    <View>
      <ImageBackground source={homeimg} style={styles.image}>
        <Text>Sign Up now!</Text>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  image: {
    flex: 2,
    width: 400,
  },
});
