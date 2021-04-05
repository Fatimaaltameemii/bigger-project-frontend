import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import homeimg from "../../../assets/homebackground.jpg";

const Home = () => {
  return (
    <View>
      <ImageBackground source={homeimg} style={styles.image}>
        <Text>hello from our home page</Text>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    flex: 2,
    width: 400,
  },
});
