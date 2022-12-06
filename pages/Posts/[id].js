import React from "react";
// import BlogComponent from "../components/blog";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
// import FormComp from "../../components/blog/form";

const FormComp = dynamic(() => import("../../components/blog/form"), {
  ssr: false,
});
const Posts = ({ props }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <FormComp id={id} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  return { props: { query } };
}
export default Posts;
