import { NextPage } from "next";
import { FormEvent } from "react";
import { MainLayout } from "../layout";
import { Image, InputField, Container, Button } from "@/components";

import styles from "./Login.module.scss";

export const Login: NextPage = () => {
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <MainLayout title="Login Page">
      <Container className={styles.Container}>
        <div className={styles.Wrapper}>
          <Image src="/ig_logo.svg" alt="Logo" className={styles.Logo} />

          <form onSubmit={onSubmit}>
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
