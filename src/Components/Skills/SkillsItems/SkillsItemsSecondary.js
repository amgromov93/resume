import React from "react";

import styles from "../../../sass/style.module.scss";

export default function SkillsItemsSecondary() {
  const adaptiveIconClasses = styles.skills__icon + ' ' + styles.skills__icon_adaptive;
  const svgIconClasses = styles.skills__icon + ' ' + styles.skills__icon_svg;
  const sassIconClasses = styles.skills__icon + ' ' + styles.skills__icon_sass;

  const skillsItemsSecondary = [
    {
      id: 4,
      title: 'Adaptyve',
      icon: adaptiveIconClasses,
    },
    {
      id: 5,
      title: 'Svg',
      icon: svgIconClasses,
    },
    {
      id: 6,
      title: 'Scss',
      icon: sassIconClasses,
    },
  ]

  return (
    <div>
      <h3 className={styles.skills__title__item}>ADAPTIVE/SVG/SASS</h3>
      <div className={styles.skills__box}>
        {skillsItemsSecondary.map((item) => (
          <article key={item.id}>
            <p className={item.icon}></p>
          </article>
        ))}
      </div>
    </div>
    
  )
}