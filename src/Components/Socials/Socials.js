import React from "react";

import styles from "../../sass/style.module.scss";

export default function Socials() {
  const titleClasses = styles.socials__title + ' ' + styles.captionOne;
  const iconInstaClasses = styles.socials__icon + ' ' + styles.socials__icon_insta;
  const iconFacebookClasses = styles.socials__icon + ' ' + styles.socials__icon_fb;
  const iconLinkedinClasses = styles.socials__icon + ' ' + styles.socials__icon_linkedin;
  const iconTelegramClasses = styles.socials__icon + ' ' + styles.socials__icon_telegram;
  const titleTextClasses = styles.socials__text + ' ' + styles.captionOne;
  const lastElementmarginClasses = styles.socials__box + ' ' + styles.socials__box_margin_bottom_0;

  const socialItems = [
    {
      id: 1,
      title: 'Instagram',
      link: <a className={styles.bodyTwo__bold} href="https://www.instagram.com/_amgromov_/">@_amgromov_</a>,
      icon: iconInstaClasses,
      style: styles.socials__box,
    },
    {
      id: 2,
      title: 'Facebook',
      link: <a className={styles.bodyTwo__bold} href="https://www.facebook.com/AMGrom">@AMGrom</a>,
      icon: iconFacebookClasses,
      style: styles.socials__box,
    },
    {
      id: 3,
      title: 'LinkedIn',
      link: <a className={styles.bodyTwo__bold} href="https://www.linkedin.com/in/oleksii-gromov-456123196/">oleksii-gromov-456123196</a>,
      icon: iconLinkedinClasses,
      style: styles.socials__box,
    },
    {
      id: 4,
      title: 'Telegram',
      link: <p className={styles.bodyTwo__bold}>@amgrom</p>,
      icon: iconTelegramClasses,
      style: lastElementmarginClasses,
    },
  ]
  
  return (
    <section className={styles.socials}>
      <h3 className={titleClasses}>Socials</h3>
      {socialItems.map((item) => (
        <article key={item.id} className={item.style}>
          <p className={item.icon}></p>
          <p className={titleTextClasses}>{item.title}</p>
          <div>{item.link}</div>
        </article>
      ))}
    </section>
  )
}