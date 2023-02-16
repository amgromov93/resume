import React from "react";
import { Col } from "antd";

import styles from "./index.module.scss";

import Title from "./Title/Title";

export default function AboutMe() {
  const aboutMeClasses = styles.body + ' ' + styles.container;

  return (
    <div className={aboutMeClasses}>
      <Col>
        <Title />
      </Col>
    </div>
  )
}