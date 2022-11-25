import React, { useEffect, useState } from "react";
import { Input, Textarea } from "@chakra-ui/react";
import { Formik } from "formik";
import { Select } from "antd";
import { db } from "../../firebase";
import { query, collection, addDoc, onSnapshot } from "firebase/firestore";
import styles from "../blog.module.css";

const FormComp = () => {
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
      <div className={styles.formContainer}>
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
            <form onSubmit={handleSubmit} className={styles.Form}>
              <Input
                className={styles.input}
                type="title"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && touched.title && errors.title}
              <Textarea
                className={styles.input}
                placeholder="Text"
                size="md"
                type="text"
                name="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <Input
                className={styles.input}
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                name="date"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.date && touched.date && errors.date}
              <Input
                className={styles.input}
                placeholder="category"
                size="md"
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.category && touched.category && errors.category}

              {errors.text && touched.text && errors.text}

              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormComp;
