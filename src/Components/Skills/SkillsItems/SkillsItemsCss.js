import React from "react";

import styles from "../../../sass/style.module.scss";

export default function SkillsItemsCss() {
  const flexIconClasses = styles.skills__icon + ' ' + styles.skills__icon_flex;
  const gridIconClasses = styles.skills__icon + ' ' + styles.skills__icon_grid;
  const floatIconClasses = styles.skills__icon + ' ' + styles.skills__icon_float;

  const skillsItemsCss = [
    {
      id: 7,
      title: 'Flex',
      icon: flexIconClasses,
    },
    {
      id: 8,
      title: 'Grid',
      icon: gridIconClasses,
    },
    {
      id: 9,
      title: 'Float',
      icon: floatIconClasses
    },
  ]

  return (
    <div className={styles.skills__box}>
      {skillsItemsCss.map((item) => (
        <article key={item.id}>
          <p className={item.icon}></p>
        </article>
      ))}
    </div>
  )
}