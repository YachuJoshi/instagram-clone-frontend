import { useState } from "react";
import { Modal } from "../modal";
import { withAuth } from "../auth";
import { MainLayout } from "../layout";
import { Button, Container } from "../components";
import { UploadModalContent } from "src/home";

export const Home = withAuth(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <MainLayout title="Home Page">
      <Container>
        {isModalOpen && (
          <Modal onModalClose={() => setIsModalOpen(false)}>
            <UploadModalContent />
          </Modal>
        )}
        <Button onClick={() => setIsModalOpen(true)}>Upload</Button>
      </Container>
    </MainLayout>
  );
});
