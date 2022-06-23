import Head from "next/head";
import cx from "classnames";
import { useRouter } from "next/router";
import { TopNavBar, BottomNav } from "@/components";

import styles from "./MainLayout.module.scss";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const MainLayout = ({ title = "", children }: LayoutProps) => {
  const router = useRouter();
  const isLogin = router.pathname === "/login";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {!isLogin && (
        <>
          <TopNavBar />
        </>
      )}
      <main
        className={cx(styles.Main, {
          [styles.Login]: isLogin,
        })}
      >
        {!isLogin && <hr className={styles.Line} />}
        {children}
      </main>
      {!isLogin && <BottomNav />}
    </>
  );
};
