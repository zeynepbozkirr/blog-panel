import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import PostsTable from "../components/blog/PostsTable";
import LogIn from "../components/blog/authentication/LogIn";
import { auth } from "../config/config";
const PostTable = dynamic(() => import("../components/blog/PostsTable"), {
  ssr: false,
});

export default function Home() {
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
  return (
    <div className={styles.container}>{user ? <PostsTable /> : <LogIn />}</div>
  );
}
