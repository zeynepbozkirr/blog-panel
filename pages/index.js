import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BlogComponent from "../components";

export default function Home() {
  return (
    <div className={styles.container}>
      <BlogComponent />
    </div>
  );
}
