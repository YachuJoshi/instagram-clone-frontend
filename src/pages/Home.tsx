import { useState } from "react";
import { api } from "../api";
import { notify } from "../utils";
import { withAuth } from "../auth";
import { MainLayout } from "../layout";
import { Container } from "../components";

export const Home = withAuth(() => {
  const [caption, setCaption] = useState("HELLO");
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    if (e.target.files.length > 4) {
      return notify("error", "Only 4 files are allowed");
    }

    setSelectedFiles(e.target.files);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedFiles) return;

    const formData = new FormData();
    formData.append("caption", caption);

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      formData.append("images", file);
    }

    try {
      await api.post("/posts/create", formData);
      notify("success", "Upload Successful!");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <MainLayout title="Home Page">
      <Container>
        <form encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="file"
            name="images"
            multiple
            onChange={(e) => onChange(e)}
          />
          <button type="submit" disabled={selectedFiles === null}>
            Submit
          </button>
        </form>
      </Container>
    </MainLayout>
  );
});
