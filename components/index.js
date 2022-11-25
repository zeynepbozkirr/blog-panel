import React, { useEffect, useState } from "react";
import Authentication from "./Authentication ";
import FormComp from "./Form/Form";
import { auth } from "../config/config";

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
  return <div>{user ? <FormComp /> : <Authentication />}</div>;
};

export default BlogComponent;
