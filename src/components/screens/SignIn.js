import React, { useState } from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import signinpic from "../../../assets/signinpic.jpg";
import styled from "styled-components/native";
import StyledButton from "../StyledButton";
import authStore from "../Stores/AuthStore";

const SignIn = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    await authStore.signin(user);
    if (authStore.user) navigation.replace("My Channels");
  };
  return (
    <ImageBackground source={signinpic} style={styles.image}>
      <StyledTextH>Sign In Page:</StyledTextH>
      <Padd></Padd>
      <StyledText>Enter your User Name:</StyledText>
      <Padd2></Padd2>
      <StyledTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="ex: taiba"
      />
      <StyledText>Enter your PassWord:</StyledText>
      <Padd2></Padd2>
      <StyledTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="ex: 123456"
        secureTextEntry={true}
      />
      <StyledButton
        onPress={handleSubmit}
        // هني لازم يدور اليوزر والباس من الداتا بيز
        title="let's Pego!!"
        accessibilityLabel="hello im a button"
        bgColor="darkcyan"
      />
    </ImageBackground>
  );
};

export default SignIn;

const Padd = styled.Text`
  padding: 20px;
`;
const Padd2 = styled.Text`
  padding: 3px;
`;
const StyledTextH = styled.Text`
  font-weight: bold;
  align-self: center;
  padding: 20px;
  color: darkcyan;
  font-size: 50px;
  text-shadow: 2px 2px black;
`;
const StyledTextInput = styled.TextInput`
  background-color: yellow;
  align-self: center;
  border-bottom-width: 3px;
  border-bottom-color: darkcyan;
  width: 90%;
  height: 50px;
  text-align: center;
  margin-bottom: 10%;
  background-color: transparent;
`;
const StyledText = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 30px;
  align-self: center;
  text-shadow: 2px 2px black;
`;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 375,
    alignSelf: "center",
  },
});
