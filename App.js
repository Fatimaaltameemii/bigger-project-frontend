import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import StartUP from "./src/components/screens/StartUp";
import SignIn from "./src/components/screens/SignIn";
import SignUp from "./src/components/screens/SignUp";
import Channels from "./src/components/screens/Channels";
import Textpage from "./src/components/screens/Textpage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigator initialRouteName="StartUP">
          <Screen name="Pego Pego Chatting" component={StartUP} />
          <Screen name="SignIn" component={SignIn} />
          <Screen name="SignUp" component={SignUp} />
          <Screen name="My Channels" component={Channels} />
          <Screen name="Chatting" component={Textpage} />
        </Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
