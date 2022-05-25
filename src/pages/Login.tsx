import { NextPage } from "next";
import { Container, Image } from "@/components";
import { MainLayout } from "src/layout";

import styles from "./Login.module.scss";

export const Login: NextPage = () => {
  return (
    <MainLayout>
      <Container className={styles.Container}>
        <div>
          <Image src="/ig_logo.svg" alt="Logo" className={styles.Logo} />
        </div>
        <div></div>
      </Container>
    </MainLayout>
  );
};
