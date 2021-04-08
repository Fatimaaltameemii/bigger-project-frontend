import { action, makeObservable, observable } from "mobx";
import axios from "axios";
let instance = axios.create({
  baseURL: "http://192.168.8.124:8000/",
});
class PegoStore {
  Channel = [];
  // User = [];
  // Message = [];

  fetchChannel = async () => {
    try {
      const response = await instance.get("http://localhost:8000/channels");
      this.Channel = response.data;
    } catch (error) {
      console.error("fetchChannel -> response", error);
    }
  };

  //  fetchMessage = async () => {
  //   try {
  //     const response = await instance.get("http://localhost:8000/messages");
  //     this.Message = response.data;
  //   } catch (error) {
  //     console.error("fetchMessage -> response", error);
  //   }
  // };

  addChannel = (user) => {
    let newChannel = user;
    newChannel.id = this.Channel.length + 1;
    this.Channel.push(newChannel);
  };
  //  addMessage = (data) => {
  //   let newMessage = data;
  //   newMessage.id = this.Message.length + 1;
  //   this.Message.push(newMessage);
  // };

  //  addUser = (data) => {
  //   let newUser = data;
  //   newUser.id = this.User.length + 1;
  //   this.User.push(newUser);
  // };

  removeChannel = (channelId) => {
    this.Channel = this.Channel.filter((channel) => channel.id !== channelId);
  };

  // removeMessage = (messageId) => {
  //   this.Message = this.Message.filter((message) => message.id !== messageId);
  // };

  // removeUser = (userId) => {
  //   this.User = this.User.filter((user) => user.id !== userId);
  // };

  constructor() {
    makeObservable(this, {
      Channel: observable,
      // User: observable,
      // Message: observable,

      fetchChannel: action,
      // fetchUser: action,
      // fetchMessage: action,

      addChannel: action,
      // addUser: action,
      // addMessage: action,

      removeChannel: action,
      // removeUser: action,
      // removeMessage: action,
    });
  }
}

const pegStore = new PegoStore();

pegStore.fetchChannel();
// pegStore.fetchMessage();

export default pegStore;
