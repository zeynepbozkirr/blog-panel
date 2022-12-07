import React, { useState } from "react";
import { Button, Popconfirm, Space, Table, Tag } from "antd";
import { useCollection } from "../../Hooks/useCollection";
import Link from "next/link";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/config";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
const FormComp = dynamic(() => import("./form"), {
  ssr: false,
});
const { Column } = Table;

const PostTable = () => {
  const { documents: Posts } = useCollection("posts");
  const [fillInputValue, setFillInputVal] = useState([]);

  const InputFill = async (id) => {
    const filterFillInputVal = Posts?.find((x) => x.id === id);
    await setFillInputVal(filterFillInputVal);
  };

  const deletePost = async (id) => {
    const ref = doc(db, "posts", id);
    await deleteDoc(ref);
  };
  return (
    <div>
      <Link href="/Posts">
        <Button onClick={() => <FormComp />}>ADD</Button>
      </Link>
      <Table dataSource={Posts}>
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="Date" dataIndex="date" key="date" />
        <Column title="Read Count" dataIndex="readCount" key="address" />

        <Column
          title="Action"
          key="action"
          dataIndex="id"
          render={(_, record) => (
            <Space size="middle">
              <Link href={`/Posts/${record.id}`}>
                <EditOutlined
                  onClick={() => {
                    InputFill(record.id);
                  }}
                />
              </Link>
              <Popconfirm
                placement="top"
                onConfirm={() => deletePost(record.id)}
                okText={"Yes"}
                cancelText={"No"}
                icon={null}
                okType={"danger"}
                // overlayInnerStyle={{
                //   // height: "50px",
                //   background: "rgba(255, 222, 222, 0.4)",
                //   borderRadius: "10px",
                //   paddingBottom: "10px",
                // }}
              >
                <DeleteOutlined />
              </Popconfirm>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default PostTable;
