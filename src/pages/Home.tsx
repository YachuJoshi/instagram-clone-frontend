import { useCallback, useState } from "react";
import { Modal } from "../modal";
import { withAuth } from "../auth";
import { MainLayout } from "../layout";
import { UploadModalContent } from "../home";
import { Button, Container } from "../components";

import styles from "./Home.module.scss";

export const Home = withAuth(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const onModalClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedFiles(null);
  }, []);

  return (
    <MainLayout title="Home Page">
      <Container className={styles.Container}>
        <Modal isModalOpen={isModalOpen} onModalClose={onModalClose}>
          <UploadModalContent
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
          />
        </Modal>
        <Button onClick={() => setIsModalOpen(true)}>Upload</Button>
      </Container>
    </MainLayout>
  );
});
