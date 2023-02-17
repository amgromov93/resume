import React from "react";

import styles from "../../sass/style.module.scss";

export default function Expirience() {
  const titleClasses = styles.experience__title + ' ' + styles.headingTwo;
  const placeClasses = styles.experience__place + ' ' + styles.captionTwo;
  const specialitiClasses = styles.experience__speciality + ' ' + styles.captionOne;
  const titleTextClasses = styles.experience__title__text + ' ' + styles.bodyTwo__bold;
  const descriptionClasses = styles.experience__description + ' ' + styles.captionTwo;

  const experienceItem = [
    {
      id: 1,
      time: 'jul 15 - this time',
      location: 'Kyiv',
      speciality: 'Owner',
      title: 'NIHVOSTA',
      description: 'Maintaining a store in social networks, creating and configuring an online store, installing and configuring extensions, SEO and Google conection.',
    },
  ]

  return (
    <section>
      <h3 className={titleClasses}>Expirience</h3>
      {experienceItem.map((item) => (
        <article key={item.id} className={styles.experience__job}>
          <div className={styles.experience__town}>
            <p className={styles.captionTwo}>{item.time}</p>
            <p className={placeClasses}>{item.location}</p>
          </div>
          <div className={styles.experience__info}>
            <p className={styles.experience__icon}></p>
            <h3 className={specialitiClasses}>{item.speciality}</h3>
            <h4 className={titleTextClasses}>{item.title}</h4>
          </div>
          <p className={descriptionClasses}>{item.description}</p>
        </article>
      ))}

    </section>
  )
}