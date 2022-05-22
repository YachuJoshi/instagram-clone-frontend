import Head from "next/head";
import { NextPage } from "next";
import { TopNavBar } from "@/components";

export const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <TopNavBar />
    </>
  );
};
