import React from "react";

import styles from "../../../sass/style.module.scss";

export default function SkillsItemsTitle() {
  const htmlIconClasses = styles.skills__icon + ' ' + styles.skills__icon_html;
  const cssIconClasses = styles.skills__icon + ' ' + styles.skills__icon_css;
  const jsIconClasses = styles.skills__icon + ' ' + styles.skills__icon_js;

  const skillsItemsTitle = [
    {
      id: 1,
      title: 'HTML',
      icon: htmlIconClasses,
    },
    {
      id: 2,
      title: 'CSS',
      icon: cssIconClasses,
    },
    {
      id: 3,
      title: 'Java Script',
      icon: jsIconClasses,
    },
  ]

  return (
    <div>
      <h3 className={styles.skills__title__item}>HTML/CSS/JS</h3>
      <div className={styles.skills__box}>
        {skillsItemsTitle.map((item) => (
          <article key={item.id}>
            <p className={item.icon}></p>
          </article>
        ))}
      </div>
    </div>
  )
}