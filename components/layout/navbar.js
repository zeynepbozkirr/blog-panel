import React from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import LogOut from "../blog/authentication/Logout";

const Navbar = () => {
  return (
    <Row
      // justify="space-around"
      style={{ background: "#D9D9D9", height: "50px", marginTop: "2px" }}
    >
      <Col
        // justify="center"
        span={4}
        offset={4}
        style={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          color: "#BD3A2A",
          fontFamily: " Source Sans Pro, sans-serif ",
          fontSize: "20px",
        }}
      >
        <Link href="/">HOME</Link>
      </Col>

      <Col
        span={6}
        offset={8}
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <LogOut />
      </Col>
    </Row>
  );
};

export default Navbar;
