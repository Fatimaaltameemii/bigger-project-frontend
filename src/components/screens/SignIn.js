import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import homeimg from "../../../assets/homebackground.jpg";

const SignIn = () => {
  return (
    <View>
      <ImageBackground source={homeimg} style={styles.image}>
        <Text>Sign in page</Text>
      </ImageBackground>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  image: {
    flex: 2,
    width: 400,
  },
});
