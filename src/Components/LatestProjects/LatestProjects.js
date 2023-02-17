import React from "react";

import styles from "../../sass/style.module.scss";

export default function LatestProjects() {
  const titleClasses = styles.projects__title + ' ' + styles.headingTwo;
  const iconClasses = styles.projects__icon + ' ' + styles.projects__icon_github;
  const serviceClasses = styles.projects__services + ' ' + styles.bodyOne__bold;
  const descriptionClasses = styles.projects__description + ' ' + styles.bodyTwo;

  const projectItems = [
    {
      id: 1,
      title: 'GitHub RESUME',
      description: 'Click this link to view my resume code in GitHub.',
      link: <a href="https://github.com/amgromov93/resume">https://github.com</a>,
    },
    {
      id: 2,
      title: 'GitHub HTML/CSS',
      description: 'The code of the graduation project of the first year of study (HTML/CSS).',
      link: <a href="https://github.com/amgromov93/project_hlegal">https://github.com</a>,
    },
    {
      id: 3,
      title: 'GitHub JS',
      description: 'The code of the projects of the second year of study (Java Script).',
      link: <a href="https://github.com/amgromov93/hillel-hw">https://github.com</a>,
    },
  ]

  return (
    <section className={styles.projects}>
      <h2 className={titleClasses}>Latest projects</h2>
      {projectItems.map((item) => (
        <article key={item.id} className={styles.projects__box}>
          <p className={iconClasses}></p>
          <div>
            <h4 className={serviceClasses}>{item.title}</h4>
            <p className={descriptionClasses}>{item.description}</p>
          </div>
          <div className={styles.projects__link}>{item.link}</div>
        </article>
      ))}
    </section>
  )
}