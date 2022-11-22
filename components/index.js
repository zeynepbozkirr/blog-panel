import React, { useEffect, useState } from "react";
import Authentication from "./Authentication ";
import FormComp from "./Form";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const BlogComponent = () => {
  return (
    <div>
      <FormComp />
      {/*<Authentication />*/}
    </div>
  );
};

export default BlogComponent;
