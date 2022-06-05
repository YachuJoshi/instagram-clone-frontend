import { useState } from "react";
import { Modal } from "../modal";
import { withAuth } from "../auth";
import { User, Post } from "../types";
import { MainLayout } from "../layout";
import { ModalContent } from "../modal";
import { Container } from "../components";
import { ProfileHeader, Posts } from "../profile";

import styles from "./Profile.module.scss";

interface Props {
  user: User;
}

export const Profile = withAuth(({ user }: Props) => {
  const [selectedPostID, setSelectedPostID] = useState<number | null>(null);
  const pageTitle = `${user.firstName} ${user.lastName} (@${user.username})`;

  const selectedPost = user.posts.find((post) => {
    if (selectedPostID) return post.id === selectedPostID;
  }) as Post;

  function onPostClick(id: number) {
    setSelectedPostID(+id);
  }

  function onModalClose() {
    setSelectedPostID(null);
  }

  return (
    <>
      {selectedPostID && (
        <Modal>
          <ModalContent
            post={selectedPost}
            username={user.username}
            onModalClose={onModalClose}
          />
        </Modal>
      )}
      <MainLayout title={pageTitle}>
        <Container className={styles.Container}>
          <ProfileHeader user={user} />
        </Container>
        <hr className={styles.Line} />
        <Container className={styles.Grid}>
          <Posts posts={user.posts} onPostClick={onPostClick} />
        </Container>
      </MainLayout>
    </>
  );
});
