import React from "react";
import NextImage from "next/image";

import { User } from "../types";
import { MainLayout } from "../layout";
import { ProfileHeader } from "../profile";
import { getImageURL } from "../cloudinary";
import { Container, Image } from "../components";

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
        {user.posts.map((post, i) => {
          const multipleMediasInPost = user.posts[i].medias.length > 1;
          return (
            <figure key={post.id} className={styles.Post}>
              <NextImage
                src={getImageURL(post.medias[0].url)}
                alt="Demo"
                height="296"
                width="296"
                objectFit="cover"
              />
              {multipleMediasInPost && (
                <div className={styles.StackWrapper}>
                  <Image
                    alt="Logo"
                    src="/copy.svg"
                    className={styles.Stack}
                    priority
                  />
                </div>
              )}
            </figure>
          );
        })}
      </Container>
    </MainLayout>
  );
};
