import React, { useEffect, useState } from "react";
import { Button, Textarea } from "@chakra-ui/react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Formik } from "formik";
import { Select } from "antd";
import { db } from "../firebase";
import {
  query,
  collection,
  orderBy,
  addDoc,
  onSnapshot,
} from "firebase/firestore";

const { formik } = Formik;

const FormComp = () => {
  const options = [];
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "Posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let posts = [];
      querySnapshot.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
      setPosts(posts);
      console.log(posts, "mmm");
    });
    return () => unsubscribe();
  }, []);

  //
  // for (let i = 10; i < 36; i++) {
  //   options.push({
  //     value: i.toString(36) + i,
  //     label: i.toString(36) + i,
  //   });
  // }

  const logout = async () => {
    await signOut(auth);
    console.log("signout");
  };

  const addPost = async (val) => {
    const ref = collection(db, "Posts");
    await addDoc(ref, {
      Title: val.title,
      Date: val.date,
      Category: val.category,
      Text: val.text,
    });
  };

  return (
    <div>
      <Button onClick={logout}> LOGOUT</Button>
      <Formik
        initialValues={{ title: "", date: "", text: "", category: [] }}
        onSubmit={(values) => {
          addPost(values);
          resetForm({});
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="title"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.title && touched.title && errors.title}
            <input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.date && touched.date && errors.date}
            <Textarea
              placeholder="Text"
              size="md"
              type="text"
              name="text"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.text && touched.text && errors.text}
            {/*<Select*/}
            {/*  mode="tags"*/}
            {/*  placeholder="category"*/}
            {/*  size="md"*/}
            {/*  name="category"*/}
            {/*  onChange={handleChange}*/}
            {/*  onBlur={handleBlur}*/}
            {/*  options={values.category}*/}
            {/*/>*/}
            <input
              placeholder="category"
              size="md"
              name="category"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.category && touched.category && errors.category}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormComp;
