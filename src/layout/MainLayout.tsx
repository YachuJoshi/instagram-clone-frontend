import Head from "next/head";
import { TopNavBar, BottomNav } from "@/components";

import styles from "./MainLayout.module.scss";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const MainLayout = ({ title = "", children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <TopNavBar />
      <main className={styles.Main}>{children}</main>
      <BottomNav />
    </>
  );
};
