import { useState } from "react";
import { Modal } from "../modal";
import { withAuth } from "../auth";
import { MainLayout } from "../layout";
import { UploadModalContent } from "../home";
import { Button, Container } from "../components";

import styles from "./Home.module.scss";

export const Home = withAuth(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <MainLayout title="Home Page">
      <Container className={styles.Container}>
        <Modal
          isModalOpen={isModalOpen}
          onModalClose={() => setIsModalOpen(false)}
        >
          <UploadModalContent />
        </Modal>
        <Button onClick={() => setIsModalOpen(true)}>Upload</Button>
      </Container>
    </MainLayout>
  );
});
