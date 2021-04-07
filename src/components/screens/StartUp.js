import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import homeimg from "../../../assets/homebackground.jpg";
import StyledButton from "../StyledButton";
import styled from "styled-components/native";

const StartUP = ({ navigation }) => {
  return (
    <ImageBackground source={homeimg} style={styles.image}>
      <StyledText>Welcome to Pego Pego Chatting Start up page!</StyledText>
      <Padd2></Padd2>
      <StyledButton
        onPress={() => navigation.navigate("SignIn")}
        title="Sign In"
        accessibilityLabel="hello im a button"
        bgColor="yellow"
      />
      <Padd></Padd>
      <StyledButton
        onPress={() => navigation.navigate("SignUp")}
        title="Sign Up"
        accessibilityLabel="hello im a button"
        bgColor="yellow"
      />
    </ImageBackground>
  );
};

export default StartUP;
const StyledText = styled.Text`
  font-weight: bold;
  align-self: center;
  padding: 20px;
  color: white;
  font-size: 30px;
  text-shadow: 2px 2px black;
`;
const Padd2 = styled.Text`
  padding: 60px;
`;
const Padd = styled.Text`
  padding: 5px;
`;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 375,
    alignSelf: "center",
  },
  Text: {
    textAlign: "center",
    marginVertical: 10,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
