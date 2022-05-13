import { NextPage } from "next";
import Head from "next/head";
import styles from "./Home.module.scss";

export const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className={styles.Container}>HELLO WORLD!</div>
    </>
  );
};
