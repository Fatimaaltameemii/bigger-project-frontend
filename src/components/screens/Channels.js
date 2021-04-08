import React from "react";
import {
  View,
  Text,
  ListView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import StyledButton from "../StyledButton";
import channelpic from "../../../assets/channelpic.jpg";
import { useState } from "react";
import pegoStore from "../Stores/PegoStore";
import { observer } from "mobx-react";
import authStore from "../Stores/AuthStore";

const Channels = ({ navigation }) => {
  const [user, setUser] = useState({
    name: "",
    admin: "",
  });
  const handleChange = (event) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    pegoStore.addChannel(user);
    if (authStore.user) navigation.replace("Chatting");
    console.log(user);
  };
  return (
    <ImageBackground source={channelpic} style={styles.image}>
      <Text>channels</Text>
      <StyledButton
        onPress={handleSubmit}
        // هني لازم يدور اليوزر والباس من الداتا بيز
        title="+"
        accessibilityLabel="hello im a button"
        bgColor="darkcyan"
      />
    </ImageBackground>
  );
};

export default observer(Channels);
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
