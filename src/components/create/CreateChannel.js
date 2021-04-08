import { useState } from "react";
import pegoStore from "../PegoStore";
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
    <div>
      {" "}
      <CustomTable>
        <form onSubmit={handleSubmit}>
          <TableContent>
            <p>Add a Class: </p>
            <label> Class name:</label>
            <input onChange={handleChange} type="text" name="className" />
          </TableContent>
          <TableContent>
            <label>Duration:</label>
            <input onChange={handleChange} type="text" name="duration" />
          </TableContent>
          <TableContent>
            <label>Class starts at:</label>
            <input onChange={handleChange} type="text" name="timing" />
          </TableContent>
          <ThemeButton type="submit">Submit</ThemeButton>
        </form>
      </CustomTable>
    </div>
  );
};
export default CreateChannels;
