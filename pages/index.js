import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import React from "react";
const PostTable = dynamic(() => import("../components/blog/PostsTable"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <PostTable />
    </div>
  );
}
