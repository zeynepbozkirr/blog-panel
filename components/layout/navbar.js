import React from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import LogOut from "../blog/authentication/Logout";

const Navbar = () => {
  return (
    <Row
      justify="space-between"
      style={{ background: "#D9D9D9", height: "50px" }}
    >
      <Col>
        <Link href="/">Home</Link>
      </Col>
      <Col>
        <Link href="/Posts">Posts</Link>
      </Col>

      <Col>
        <LogOut />
      </Col>
    </Row>
  );
};

export default Navbar;
