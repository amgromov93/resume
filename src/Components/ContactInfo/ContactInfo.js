import React from "react";

import styles from "../index.module.scss";
import variables from "../../sass/style.module.scss";

export default function ContactInfo() {
  const iconEmailClasses = styles.contact__icon + ' ' + styles.contact__icon_mail;
  const iconPhoneClasses = styles.contact__icon + ' ' + styles.contact__icon_phone;
  const iconWebsiteClasses = styles.contact__icon + ' ' + styles.contact__icon_site;
  const iconAdressClasses = styles.contact__icon + ' ' + styles.contact__icon_adress;
  const lastElementMarginClasses = styles.contact__box + ' ' + styles.contact__box_margin_0;
  const titleTextClasses = variables.captionOne + ' ' + styles.contact__text;
  
  const contactItems = [
    {
      id: 1, 
      title: 'Email',
      description: <a href="mailto:amgromov93@gmail.com">amgromov93@gmail.com</a>,
      icon: iconEmailClasses,
      style: styles.contact__box,
    },
    {
      id: 2, 
      title: 'Phone',
      description: <a href="tel:+380737070737">+380737070737</a>,
      icon: iconPhoneClasses,
      style: styles.contact__box,
    },
    {
      id: 3, 
      title: 'Website',
      description: <a className={variables.bodyTwo__bold} href="https://github.com/amgromov93">https://github.com/amgromov93</a>,
      icon: iconWebsiteClasses,
      style: styles.contact__box,
    },
    {
      id: 4, 
      title: 'Adress',
      description: <p className={variables.bodyTwo__bold}>Ukraine, Kyiv</p>,
      icon: iconAdressClasses,
      style: lastElementMarginClasses,
    },
  ]

  return (
    <section className={styles.contact}>
      {contactItems.map((item) => (
        <article key={item.id} className={item.style}>
          <p className={item.icon}></p>
          <p className={titleTextClasses}>{item.title}</p>
          {item.description}
        </article>
      ))}
    </section>
  )
}