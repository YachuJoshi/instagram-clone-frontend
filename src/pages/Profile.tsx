import { useState } from "react";
import { Modal } from "../modal";
import { withAuth } from "../auth";
import { User, Post } from "../types";
import { MainLayout } from "../layout";
import { Container } from "../components";
import { ProfileHeader, Posts, PostModal } from "../profile";

import styles from "./Profile.module.scss";

interface Props {
  user: User;
}

export const Profile = withAuth(({ user }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostID, setSelectedPostID] = useState<number | null>(null);
  const pageTitle = `${user.firstName} ${user.lastName} (@${user.username})`;

  const selectedPost = user.posts.find((post) => {
    if (selectedPostID) return post.id === selectedPostID;
  }) as Post;

  function onPostClick(id: number) {
    setIsModalOpen(true);
    setSelectedPostID(+id);
  }

  function onModalClose() {
    setIsModalOpen(false);
    setSelectedPostID(null);
  }

  return (
    <>
      <Modal isModalOpen={isModalOpen} onModalClose={onModalClose}>
        <PostModal post={selectedPost} username={user.username} />
      </Modal>
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
