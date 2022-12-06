import React, { useEffect, useState } from "react";
import LogIn from "./authentication/LogIn";
import FormComp from "./form";
import { auth } from "../../config/config";
import "draft-js/dist/Draft.css";

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
  return <div>{user ? <FormComp /> : <LogIn />}</div>;
};

export default BlogComponent;
