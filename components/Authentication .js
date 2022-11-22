import React, { useState } from "react";
import {
  Button,
  Center,
  Container,
  Input,
  Square,
  Wrap,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Flex, Spacer } from "@chakra-ui/react";

const Authentication = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [log, setLog] = useState();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      setLog(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Wrap marginTop="100px" spacing="5px" justify="center">
        <Center w="100%" h="80px">
          <Input
            placeholder=" email"
            variant="filled"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </Center>
        <Center w="100%">
          <Input
            type="password"
            placeholder=" password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </Center>
        <Center w="100%" h="50px">
          <Button onClick={login}> LOGİN</Button>
        </Center>
      </Wrap>

      {/*{log ? "giriş" : null}*/}
    </div>
  );
};

export default Authentication;