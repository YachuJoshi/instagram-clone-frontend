import React from "react";

import { User } from "../types";
import { MainLayout } from "../layout";
import { Container } from "../components";
import { ProfileHeader, Posts } from "../profile";

import styles from "./Profile.module.scss";

interface Props {
  user: User;
}

export const Profile = ({ user }: Props) => {
  const pageTitle = `${user.firstName} ${user.lastName} (@${user.username})`;

  return (
    <MainLayout title={pageTitle}>
      <Container className={styles.Container}>
        <ProfileHeader user={user} />
      </Container>
      <hr className={styles.Line} />
      <Container className={styles.Grid}>
        <Posts posts={user.posts} />
      </Container>
    </MainLayout>
  );
};
