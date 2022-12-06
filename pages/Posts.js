import React from "react";
import PostTable from "../components/blog/PostsTable";
// import BlogComponent from "../components/blog";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
// import FormComp from "../components/blog/form";

const FormComp = dynamic(() => import("../components/blog/form"), {
  ssr: false,
});
const Posts = () => {
  return (
    <div>
      <FormComp />
    </div>
  );
};

export default Posts;
