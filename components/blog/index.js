import React, { useEffect, useState } from "react";
import LogIn from "./authentication/LogIn";
import FormComp from "./form";
import { auth } from "../../config/config";
import "draft-js/dist/Draft.css";
import PostsTable from "./PostsTable";

const BlogComponent = () => {
  const [user, setUser] = useState(() => {
    const user = auth.currentUser;
    console.log(auth, "uss");
    return user;
  }, [user]);

  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
  }, []);

  return <div>{user ? <PostsTable /> : <LogIn />}</div>;
};

export default BlogComponent;
