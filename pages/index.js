import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BlogComponent from "../components";
import Drawer from "../components/Drawer";
import { useEffect, useState } from "react";
import { auth } from "../config/config";
import { WindowsFilled } from "@ant-design/icons";
import useWindowSize from "../Hooks/useWindowSize";

export default function Home() {
  // const [width, height] = useWindowSize();

  return (
    <div
      className={styles.container}
      // style={{ width: width / 4, height: height / 4 }}
    >
      <Drawer />
      <BlogComponent />
    </div>
  );
}
