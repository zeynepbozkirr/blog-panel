import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./blog.module.css";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const DrawerComp = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const logout = async () => {
    await signOut(auth);
    console.log("signout");
  };

  return (
    <>
      <MenuOutlined
        onClick={showDrawer}
        style={{ fontSize: "26px", color: "#08c", margin: "5px" }}
      />

      <Drawer placement="left" onClose={onClose} open={open}>
        <div className={styles.formLogoutButton}>
          <Button onClick={logout} className={styles.formLogoutButton}>
            LOGOUT
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerComp;
