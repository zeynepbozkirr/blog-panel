import React, { useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import { useCollection } from "../../Hooks/useCollection";
import FormComp from "./form";
import Link from "next/link";
const { Column } = Table;

const PostTable = () => {
  const { documents: Posts } = useCollection("posts");
  const [fillInputValue, setFillInputVal] = useState([]);

  const InputFill = async (id) => {
    const filterFillInputVal = Posts?.find((x) => x.id === id);
    await setFillInputVal(filterFillInputVal);
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
                <Button
                  onClick={() => {
                    InputFill(record.id);
                  }}
                >
                  Edit
                </Button>
              </Link>

              <Link href="/Posts">
                <Button onClick={() => console.log("dd", record.id)}>
                  Delete
                </Button>
              </Link>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default PostTable;
