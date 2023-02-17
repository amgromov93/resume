import React from "react";
import { Col, Row } from "antd";

import styles from "./sass/style.module.scss";

import Title from "./Components/Title/Title";
import ContactInfo from "./Components/ContactInfo/ContactInfo";
import Socials from "./Components/Socials/Socials";
import Languages from "./Components/Languages/Languages";

export default function App() {
  const aboutMeClasses = styles.body + ' ' + styles.container;

  return (
    <Row>
      <Col span={8} className={aboutMeClasses}>
        <Title />
        <ContactInfo />
        <Socials />
        <Languages />
      </Col>
      <Col span={16}>
        
      </Col>
    </Row>
  );
}