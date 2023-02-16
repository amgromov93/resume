import React from "react";

import styles from "../index.module.scss";
import variables from "../../sass/style.module.scss";

export default function Title() {
  const nameClasses = styles.title__name + ' ' + variables.headingOne;
  const jobClasses = styles.title__job + ' ' + variables.headingTwo;
  const quoteClasses = styles.title__quote + ' ' + variables.headingThree;
  const authorClasses = styles.title__quote_author + ' ' + variables.captionOne;

  return (
    <section className={styles.title}>
      <p className={styles.title__img}></p>
      <h2 className={nameClasses}>Oleksii Gromov</h2>
      <h3 className={jobClasses}>Front-End Developer</h3>
      <p className={quoteClasses}>"In theory, there is no difference between theory and practice, in practice there is."</p>
      <p className={authorClasses}>Yoggi Berra</p>
    </section>
  )
}