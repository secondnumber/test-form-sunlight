import Head from 'next/head';
import styles from './MainLayout.module.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import React from "react";

export function MainLayout({ children, name }) {
  const makeShortName = (name) => {
      if (name) {
          const nameArr = name.split(' ');
          const shortName = `${nameArr[0]} ${nameArr[1].charAt(0)}.`;
          return shortName;
      }

  };

  return (
    <div className={styles.wrapper}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Test task for Sunlight company</title>
      </Head>
      <header className={styles.header}>
        <section className={styles.menu}>
          <NotificationsNoneIcon style={{ fontSize: 29, marginRight: 20 }} />
          <div className={styles.stroke}></div>
          <div className={styles.icon}></div>
          <div className={styles.name}>{makeShortName(name)}</div>
        </section>
        <section className={styles.title}>
          <h2 className={styles.label}>ЛИЧНЫЙ ПРОФИЛЬ</h2>
          <p className={styles.caption}>Главная / Личный профиль</p>
        </section>
      </header>
      <main>{children}</main>
    </div>
  );
}
