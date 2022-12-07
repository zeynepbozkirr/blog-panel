import React, { useState, useEffect, useRef } from "react";
import { Button, Form, Input, Select } from "antd";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/config";
import useWindowSize from "../../../Hooks/useWindowSize";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useCollection } from "../../../Hooks/useCollection";

const FormComp = ({ id, fillInputValue }) => {
  const { documents: Posts } = useCollection("posts");
  const { width, height } = useWindowSize();

  const [convertedText, setConvertedText] = useState("Some default content");
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();
  const formRef = useRef();
  console.log(form, "formref", formRef);

  const date = new Date();

  const filterFillInputVal = (id) => {
    const fillinput = Posts?.find((x) => x.id === id);

    form.setFieldsValue({
      title: fillinput?.title,
      date: date.toLocaleDateString(),
      category: fillinput?.category,
      content: fillinput?.postContent,
      readCount: 0,
    });
    // setLoading(false);
  };

  useEffect(() => {
    if (id && Posts) {
      filterFillInputVal(id);
    }
  }, [id, Posts]);

  const addPost = async (val) => {
    if (id) {
      const ref = doc(db, "posts", id);
      await updateDoc(ref, {
        title: val.title,
        date: date.toLocaleDateString(),
        category: val.category,
        postContent: val.content,
        readCount: 0,
      });
    } else {
      console.log("eeeee");
      const ref = collection(db, "posts");
      await addDoc(ref, {
        title: val.title,
        date: date.toLocaleDateString(),
        category: val.category,
        postContent: val.content,
        readCount: 0,
      });
    }
    console.log("send", val, fileList, formRef);
    formRef.current.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return loading ? (
    <div>asd</div>
  ) : (
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
        span: 6,
      }}
      wrapperCol={{
        span: 10,
      }}
      onFinish={addPost}
      onFinishFailed={onFinishFailed}
      requiredMark={false}
      ref={formRef}
      form={form}
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
