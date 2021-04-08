import { View, Text } from "react-native";
import pegoStore from "../Stores/PegoStore";
import StyledButton from "../StyledButton";
import React from "react";

const Channelitem = (props) => {
  const channel = props.channel;

  return (
    <View>
      <Text> {channel.name}</Text>
      <StyledButton
        onPress={() => pegoStore.removeChannel(channel.id)}
        bgColor="yellow"
      />
    </View>
  );
};
export default Channelitem;
