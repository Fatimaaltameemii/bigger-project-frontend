import { useState } from "react";
import { View, Text } from "react-native";
import pegoStore from "../PegoStore";
import styled from "styled-components/native";
import { CustomTable } from "../styles";
import { TableContent } from "../styles";
import { ThemeButton } from "../styles";
const CreateChannels = () => {
  const [data, setData] = useState({
    name: "",
    admin: "",
  });
  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    pegoStore.addChannel(data);
    console.log(data);
  };

  return (
    <View>
      {" "}
      <CustomTable>
        <form onSubmit={handleSubmit}>
          <TableContent>
            <Text>Add a Channel: </Text>
            <label> name:</label>
            <TextInput onChange={handleChange} type="text" name="channelName" />
          </TableContent>
          <ThemeButton type="submit">Submit</ThemeButton>
        </form>
      </CustomTable>
    </View>
  );
};

const StyledText = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 30px;
  align-self: center;
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

export const CustomTable = styled.div`
  display: flex;
  background-color: #ad2831;
  padding: 20px;
  align-content: center;
  display: block;
  align-content: center;
  margin-left: 220px;
  margin-right: 100px;
  color: white;
  border-color: black;
  border-style: solid;
`;

export const TableContent = styled.div`
  margin-left: 400px;
  margin-right: 120px;
  font-size: x-large;
  font-family: "Lucida Sans";
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin-left: 1000px;
  padding: 0.5em 1em;
  border-radius: 100px;
  background-color: #f9dbbd;
  color: black;
`;
export default CreateChannels;
