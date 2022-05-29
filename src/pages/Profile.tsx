import { Container, Image } from "../components";
import { MainLayout } from "../layout";
import { User } from "../types";
import UserImg from "../static/user.jpg";

import styles from "./Profile.module.scss";

interface Props {
  user: User;
}

export const Profile = ({ user }: Props) => {
  const pageTitle = `${user.firstName} ${user.lastName} (@${user.username})`;
  const userActualName = `${user.firstName} ${user.lastName}`;
  return (
    <MainLayout title={pageTitle}>
      <Container className={styles.Container}>
        <h1 className={styles.UserName}>{user.username}</h1>
        <div className={styles.UserProfile}>
          <Image
            src={UserImg}
            alt={user.username}
            className={styles.DefaultPicture}
          />
          <div className={styles.InfoWrapper}>
            <div className={styles.ProfileInfo}>
              <span className={styles.Wrapper}>
                <p className={styles.Count}>{user.posts.length}</p>
                <p className={styles.Placeholder}>Posts</p>
              </span>
              <span className={styles.Wrapper}>
                <p className={styles.Count}>1916</p>
                <p className={styles.Placeholder}>Followers</p>
              </span>
              <span className={styles.Wrapper}>
                <p className={styles.Count}>722</p>
                <p className={styles.Placeholder}>Following</p>
              </span>
            </div>
            <div className={styles.UserDetails_MD}>
              <p className={styles.Name_MD}>{userActualName}</p>
              <p className={styles.Bio_MD}>{user.bio}</p>
            </div>
          </div>
        </div>
        <div className={styles.UserDetails}>
          <p className={styles.Name}>{userActualName}</p>
          <p className={styles.Bio}>{user.bio}</p>
        </div>
      </Container>
      <hr className={styles.Line} />
    </MainLayout>
  );
};
