import React, { useState } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import signupPic from "../../../assets/signuppic.jpg";
import styled from "styled-components/native";
import StyledButton from "../StyledButton";
import authStore from "../Stores/AuthStore";
const SignUp = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.replace("SignIn");
  };
  return (
    <ImageBackground source={signupPic} style={styles.image}>
      <StyledTextH>Sign Up now!</StyledTextH>
      <Padd></Padd>
      <StyledText> Enter your User Name: </StyledText>
      <Padd2></Padd2>
      <StyledTextInput placeholder="ex: taiba" />
      <StyledText> Enter your PassWord: </StyledText>
      <Padd2></Padd2>
      <StyledTextInput placeholder="ex: 123456" />
      <StyledButton
        onPress={handleSubmit} // هني لازم نضيف اليوزر والباس للداتا بيز
        title="First Pego!!"
        accessibilityLabel="hello im a button"
        bgColor="darkcyan"
      />
    </ImageBackground>
  );
};
export default SignUp;

const Padd = styled.Text`
  padding: 40px;
`;
const Padd2 = styled.Text`
  padding: 2px;
`;

const StyledTextH = styled.Text`
  font-weight: bold;
  align-self: center;
  padding: 20px;
  color: darkcyan;
  font-size: 50px;
  text-shadow: 3px 3px white;
`;
const StyledTextInput = styled.TextInput`
  background-color: white;
  align-self: center;
  border-bottom-width: 4px;
  border-bottom-color: #ccc;
  width: 90%;
  height: 40px;
  text-align: center;
  margin-bottom: 10%;
  background-color: #f2f2f2;
`;
const StyledText = styled.Text`
  font-weight: bold;
  color: darkcyan;
  font-size: 20px;
  align-self: center;
  text-shadow: 3px 3px black;
`;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 375,
    alignSelf: "center",
  },
});
