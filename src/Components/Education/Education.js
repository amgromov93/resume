import React from "react";

import styles from "../../sass/style.module.scss";

export default function Education() {
  const titleClasses = styles.education__title + ' ' + styles.headingTwo;
  const textTitleClasses = styles.education__title__text + ' ' + styles.headingTwo__bold;
  const specialityClasses = styles.education__speciality + ' ' + styles.bodyTwo__bold;
  const timeClasses = styles.education__time + ' ' + styles.captionTwo;

  const educationItems = [
    {
      id:1,
      title: 'It hillel',
      link: <a href="https://certificate.ithillel.ua/view/70137320" className={specialityClasses}>Front-end BASIC</a>,
      time: 'Mar - Jun 2022',
      style: '',
    },
    {
      id:2,
      title: 'It hillel',
      link: <a href="https://certificate.ithillel.ua/view/79018382" className={specialityClasses}>Front-end PRO</a>,
      time: 'Sep - Jan 2023',
      style: '',
    },
  ]

  return (
    <section>
      <h3 className={titleClasses}>Education</h3>
      <div className={styles.education__box}>
      {educationItems.map((item) => (
        <article key={item.id} className={styles.education__item}>
          <p className={styles.education__icon}></p>
          <h4 className={textTitleClasses}>{item.title}</h4>
          <div>
            {item.link}
            <p className={timeClasses}>{item.time}</p>
          </div>
        </article>
      ))}
      </div>
    </section>
  )
}