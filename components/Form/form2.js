import React, { createRef, useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { EditorState } from "draft-js";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/config";
import useWindowSize from "../../Hooks/useWindowSize";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Form2 = () => {
  const { width, height } = useWindowSize();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const { TextArea } = Input;

  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  const addPost = async (val) => {
    const ref = collection(db, "Posts");
    await addDoc(ref, {
      Title: val.title,
      Date: serverTimestamp(),
      Category: val.category,
      Text: val.text,
    });
    console.log("send");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log(width, "III");

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
        // offset: 4,
      }}
      wrapperCol={{
        span: 10,
      }}
      initialValues={{ title: "", date: "", text: "", category: [] }}
      onFinish={(values) => {
        addPost(values);
      }}
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
          // onChange={handleChange}
          // options={options}
        />
      </Form.Item>
      <Form.Item
        name="edit"
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <div
          style={{
            border: "1px solid black",
            padding: "2px",
            minHeight: "400px",
          }}
        >
          <Editor
            style={{ width: window.innerWidth, height: "100px" }}
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>
      </Form.Item>
      {/*<Form.Item name="text" label="TextArea">*/}
      {/*  <TextArea rows={4} />*/}
      {/*</Form.Item>*/}
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
export default Form2;
