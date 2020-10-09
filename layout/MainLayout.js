import Head from 'next/head';
import styles from './MainLayout.module.css';

export function MainLayout({ children, name }) {
  return (
    <>
      <Head>
        <title>Test task for Sunlight company</title>
      </Head>
      <header>
        <h1>Main layout</h1>
      </header>
      <main>{children}</main>
    </>
  );
}
