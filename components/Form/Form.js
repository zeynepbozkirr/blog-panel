import React, { useEffect, useState } from "react";
import { Input, Textarea } from "@chakra-ui/react";
import { Formik } from "formik";
import { db } from "../../config/config";
import firebase from "firebase/app";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import styles from "../blog.module.css";
import { useCollection } from "../../Hooks/useCollection";

const FormComp = () => {
  const { documents: Posts } = useCollection("Posts");

  const addPost = async (val) => {
    const ref = collection(db, "Posts");
    await addDoc(ref, {
      Title: val.title,
      Date: serverTimestamp(),
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
