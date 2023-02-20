import React from "react";
import { Tabs } from 'antd';

import styles from "../../sass/style.module.scss";

import SkillsItemsCss from "./SkillsItems/SkillsItemsCss";
import SkillsItemsFrameworks from "./SkillsItems/SkillsItemsFrameworks";
import SkillsItemsSecondary from "./SkillsItems/SkillsItemsSecondary";
import SkillsItemsTitle from "./SkillsItems/SkillsItemsTitle";
import { 
  TitleSkillsDescription, 
  SecondarySkillsDescription, 
  CssSkillsDescription, 
  FrameworksSkillsDescription 
} from "./SkillsItems/SkillsDescription";

export default function Skills() {
  const titleClasses = styles.skills__title + ' ' + styles.headingTwo;

  const items = [
    {
      key: '1',
      label: <SkillsItemsTitle />,
      children: <TitleSkillsDescription />,
    },
    {
      key: '2',
      label: <SkillsItemsSecondary />,
      children: <SecondarySkillsDescription />,
    },
    {
      key: '3',
      label: <SkillsItemsCss />,
      children: <CssSkillsDescription />,
    },
    {
      key: '4',
      label: <SkillsItemsFrameworks />,
      children: <FrameworksSkillsDescription />,
    },
  ];
 
  return (
    <section>
      <h3 className={titleClasses}>Skills</h3>
      <Tabs defaultActiveKey="1" 
            items={items} 
            centered
            className={styles.skills__tabs}
      />
    </section>
  )
}