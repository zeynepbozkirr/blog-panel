import React, { useEffect, useState } from "react";
import PostTable from "../components/blog/PostsTable";
// import BlogComponent from "../components/blog";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import PostsTable from "../components/blog/PostsTable";
import LogIn from "../components/blog/authentication/LogIn";
import { auth } from "../config/config";
// import FormComp from "../components/blog/form";

const FormComp = dynamic(() => import("../components/blog/form"), {
  ssr: false,
});

const Posts = () => {
  const [user, setUser] = useState(() => {
    const user = auth.currentUser;
    console.log(auth, "uss");
    return user;
  });

  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
  }, []);
  return <div>{user ? <FormComp /> : <LogIn />}</div>;
};

export default Posts;
