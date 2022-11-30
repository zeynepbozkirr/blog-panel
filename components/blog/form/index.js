import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../config/config";
import useWindowSize from "../../../Hooks/useWindowSize";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const FormComp = () => {
  const { width, height } = useWindowSize();
  const [convertedText, setConvertedText] = useState("Some default content");

  const addPost = async (val) => {
    const ref = collection(db, "posts");
    await addDoc(ref, {
      title: val.title,
      date: serverTimestamp(),
      category: val.category,
      postContent: val.content,
      readCount: 0,
    });
    console.log("send", val.content.toString());
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      style={{
        width: width,
        height: height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 10,
      }}
      initialValues={{ title: "", date: "", text: "", category: [] }}
      onFinish={(values) => {
        addPost(values);
      }}
      onFinishFailed={onFinishFailed}
      requiredMark={false}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Category"
        name="category"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Select
          mode="tags"
          style={{
            width: "100%",
          }}
          placeholder="Tags Mode"
          // options={options}
        />
      </Form.Item>
      <Form.Item
        name="content"
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <ReactQuill
          theme="snow"
          value={convertedText}
          onChange={setConvertedText}
          style={{ minHeight: "300px" }}
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComp;
