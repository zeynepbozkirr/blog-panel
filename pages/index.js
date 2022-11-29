import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import BlogComponent from "../components";
// import Drawer from "../components/Drawer";
import dynamic from "next/dynamic";
const Drawer = dynamic(() => import("../components/Drawer"), { ssr: false });
const BlogComponent = dynamic(() => import("../components"), { ssr: false });

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
