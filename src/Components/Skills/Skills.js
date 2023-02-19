import React from "react";
import { Tabs } from 'antd';

import styles from "../../sass/style.module.scss";

import SkillsItemsCss from "./SkillsItems/SkillsItemsCss";
import SkillsItemsFrameworks from "./SkillsItems/SkillsItemsFrameworks";
import SkillsItemsSecondary from "./SkillsItems/SkillsItemsSecondary";
import SkillsItemsTitle from "./SkillsItems/SkillsItemsTitle";
import SkillsDescription from "./SkillsItems/SkillsDescription";

export default function Skills() {
  const titleClasses = styles.skills__title + ' ' + styles.headingTwo;

  const items = [
    {
      key: '1',
      label: <SkillsItemsTitle />,
      children: <SkillsDescription/>,
    },
    {
      key: '2',
      label: <SkillsItemsSecondary />,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: <SkillsItemsCss />,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '4',
      label: <SkillsItemsFrameworks />,
      children: `Content of Tab Pane 4`,
    },
  ];
 
  return (
    <section>
      <h3 className={titleClasses}>Skills</h3>
      <Tabs defaultActiveKey="1" items={items} className={styles.skills__tabs} />
    </section>
  )
}