import React from "react";
import { Col, Row } from "antd";
import styles from "./sass/style.module.scss";

import AboutMe from "./Components/AboutMe";
import Information from "./Components/Information";

export default function App() {
  return (
    <Row>
      <Col span={8}>
        <AboutMe />
      </Col>
      <Col span={16}>
        <Information />
      </Col>
    </Row>
  );
}