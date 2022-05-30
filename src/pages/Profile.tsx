import { Container } from "../components";
import { MainLayout } from "../layout";
import { User } from "../types";

import styles from "./Profile.module.scss";
import { ProfileHeader } from "src/profile";

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
    </MainLayout>
  );
};
