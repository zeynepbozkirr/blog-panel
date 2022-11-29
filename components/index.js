import React, { useEffect, useState } from "react";
import Authentication from "./Authentication ";
import FormComp from "./Form/Form";
import { auth } from "../config/config";
import Form2 from "./Form/form2";

const BlogComponent = () => {
  const [user, setUser] = useState(() => {
    const user = auth.currentUser;
    return user;
  });
  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
  }, []);
  return <div>{user ? <Form2 /> : <Authentication />}</div>;
};

export default BlogComponent;
