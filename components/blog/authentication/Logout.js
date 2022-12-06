import React from "react";
import styles from "../../blog/blog.module.css";
import { auth } from "../../../config/config";
import { signOut } from "firebase/auth";
import { Button } from "antd";

const LogOut = () => {
  const logout = async () => {
    await signOut(auth);
    console.log("signout");
  };

  return (
    <>
      <div className={styles.formLogoutButton}>
        <Button onClick={logout} className={styles.formLogoutButton}>
          LOGOUT
        </Button>
      </div>
    </>
  );
};

export default LogOut;
