import React from "react";
import { Col, Row } from "antd";

import styles from "./sass/style.module.scss";

import Title from "./Components/Title/Title";
import ContactInfo from "./Components/ContactInfo/ContactInfo";
import Socials from "./Components/Socials/Socials";
import Languages from "./Components/Languages/Languages";
import LatestProjects from "./Components/LatestProjects/LatestProjects";
import Expirience from "./Components/Experiance/Expirience";
import Education from "./Components/Education/Education";

export default function App() {
  const blockClasses = styles.body + ' ' + styles.container;

  return (
    <Row>
      <Col span={8} className={blockClasses}>
        <Title />
        <ContactInfo />
        <Socials />
        <Languages />
      </Col>
      <Col span={16} className={blockClasses}>
        <LatestProjects />
        <Expirience />
        <Education />
      </Col>
    </Row>
  );
}