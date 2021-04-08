import React from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react";
import pegoStore from "../Stores/PegoStore";
import Channelitem from "./Channelitem";

const ChannelList = () => {
  const channelList = pegoStore.Channel.map((channel) => (
    <Channelitem Channel={channel} key={channel.id} />
  ));
  return <View>{channelList}</View>;
};
export default observer(ChannelList);
