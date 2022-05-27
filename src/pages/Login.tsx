import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { MainLayout } from "../layout";
import { notify } from "../utils";
import { useAuth } from "../context";
import { Image, InputField, Container, Button } from "@/components";

import styles from "./Login.module.scss";

export const Login: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useAuth();
  const router = useRouter();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!username || !password) {
      return notify("error", "Necessary Fields Are Missing!");
    }

    await login({ username, password });
  }

  useEffect(() => {
    if (user) {
      void router.push("/");
    }
  }, [user, router]);

  return (
    <MainLayout title="Login Page">
      <Container className={styles.Container}>
        <div className={styles.Wrapper}>
          <Image
            src="/ig_logo.svg"
            alt="Logo"
            className={styles.Logo}
            priority
          />
          <form onSubmit={onSubmit}>
            <InputField
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputField
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className={styles.Button}>
              Log In
            </Button>
          </form>
        </div>
      </Container>
    </MainLayout>
  );
};
