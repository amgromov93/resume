import React from "react";

import styles from "../../sass/style.module.scss";

export default function Languages() {
  const titleClasses = styles.languages__title + ' ' + styles.captionOne;
  const iconUkraineClasses = styles.languages__icon + ' ' + styles.languages__icon_ukraine;
  const iconEnglishClasses = styles.languages__icon + ' ' + styles.languages__icon_english;
  const iconDeutschClasses = styles.languages__icon + ' ' + styles.languages__icon_german;
  const titleTextClasses = styles.languages__text + ' ' + styles.bodyTwo__bold;
  const lastElementMarginClasses = styles.languages__box_margin_bottom_0 + ' ' + styles.captionOne;

  const languagesItems = [
    {
      id: 1,
      title: 'Ukrainian',
      description: 'Native',
      icon: iconUkraineClasses,
      style: styles.captionOne,
    },
    {
      id: 2,
      title: 'English',
      description: 'Intermediate',
      icon: iconEnglishClasses,
      style: styles.captionOne,
    },
    {
      id: 3,
      title: 'Deutsch',
      description: 'Elementary',
      icon: iconDeutschClasses,
      style: lastElementMarginClasses,
    },
  ]

  return (
    <section className={styles.languages}>
      <h3 className={titleClasses}>Languages</h3>
      {languagesItems.map((item) => (
        <article key={item.id} className={styles.languages__box}>
          <p className={item.icon}></p>
          <p className={titleTextClasses}>{item.title}</p>
          <p className={item.style}>{item.description}</p>
        </article>
      ))}
    </section>
  )
}