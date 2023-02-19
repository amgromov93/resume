import React from "react";

import styles from "../../../sass/style.module.scss";

export default function SkillsItemsFrameworks() {
  const bootstrapIconClasses = styles.skills__icon + ' ' + styles.skills__icon_bootstrap;
  const antdIconClasses = styles.skills__icon + ' ' + styles.skills__icon_antd;
  const muiIconClasses = styles.skills__icon + ' ' + styles.skills__icon_mui;

  const skillsItemsFrameworks = [
    {
      id: 10,
      title: 'Bootstrap',
      icon: bootstrapIconClasses,
    },
    {
      id: 11,
      title: 'Ant design',
      icon: antdIconClasses,
    },
    {
      id: 12,
      title: 'Mui',
      icon: muiIconClasses,
    },
  ]

  return (
    <div>
      <h3 className={styles.skills__title__item}>BOOTSTRAP/ANTD/MUI</h3>
      <div className={styles.skills__box}>
        {skillsItemsFrameworks.map((item) => (
          <article key={item.id}>
            <p className={item.icon}></p>
          </article>
        ))}
      </div>
    </div>
    
  )
}