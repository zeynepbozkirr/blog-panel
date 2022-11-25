import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BlogComponent from "../components";
import Drawer from "../components/Drawer";
import { useEffect, useState } from "react";
import { auth } from "../config/config";

export default function Home() {
  return (
    <div className={styles.container}>
      <Drawer />
      <BlogComponent />
    </div>
  );
}
