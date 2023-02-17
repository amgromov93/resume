import React from "react";

import styles from "../../sass/style.module.scss";

export default function Socials() {
  const socialItems = [
    {
      id: 1,
      title: 'Instagram',
      link: <a class="left__social-item body-2__bold" href="https://www.instagram.com/_amgromov_/">@_amgromov_</a>,
      icon: '',
      style: '',
    },
    {
      id: 2,
      title: 'Facebook',
      link: <a class="left__social-item body-2__bold" href="https://www.facebook.com/AMGrom">@AMGrom</a>,
      icon: '',
      style: '',
    },
    {
      id: 3,
      title: 'LinkedIn',
      link: <a class="left__social-item body-2__bold" href="https://www.linkedin.com/in/oleksii-gromov-456123196/">oleksii-gromov-456123196</a>,
      icon: '',
      style: '',
    },
    {
      id: 4,
      title: 'Telegram',
      link: <p class="left__social-item body-2__bold">@amgrom</p>,
      icon: '',
      style: '',
    },
  ]
  
  return (
    <section className={styles.socials}>
      <h3>Socials</h3>
      {socialItems.map((item) => (
        <article key={item.id}>
          <p class="left__social-icon left__social-icon--insta"></p>
          <p class="left__social-text caption-1">{item.title}</p>
          {item.link}
        </article>
      ))}
    </section>
  )
}