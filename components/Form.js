import React from "react";
import { Button, Input } from "@chakra-ui/react";
import { auth } from ".././firebase";
import { signOut } from "firebase/auth";

const Form = () => {
  const logout = async () => {
    await signOut(auth);
    console.log("signout");
  };

  return (
    <div>
      <Button onClick={logout}> LOGOUT</Button>
      title <Input />
      text <Input />
      date
      <Input
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
      />
      <Button> ADD</Button>
    </div>
  );
};

export default Form;
