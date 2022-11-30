import styles from "../styles/Home.module.css";
// import BlogComponent from "../components";
// import Drawer from "../components/Drawer";
import dynamic from "next/dynamic";
const Drawer = dynamic(() => import("../components/Drawer"), { ssr: false });
const BlogComponent = dynamic(() => import("../components/blog"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Drawer />
      <BlogComponent />
    </div>
  );
}
