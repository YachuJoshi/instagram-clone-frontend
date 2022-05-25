import { NextPage } from "next";
import { MainLayout } from "src/layout";
import { Image, InputField, Container, Button } from "@/components";

import styles from "./Login.module.scss";

export const Login: NextPage = () => {
  return (
    <MainLayout>
      <Container className={styles.Container}>
        <div className={styles.Wrapper}>
          <Image src="/ig_logo.svg" alt="Logo" className={styles.Logo} />

          <form>
            <InputField type="text" placeholder="Enter Username" />
            <InputField type="password" placeholder="Password" />
            <Button type="submit" className={styles.Button}>
              Log In
            </Button>
          </form>
        </div>
        <div></div>
      </Container>
    </MainLayout>
  );
};
