import { useState, useEffect, useId } from "react";
import { notify } from "../utils";
import { createPost } from "../services";
import { Container } from "../components";
import { FormHeader } from "./FormHeader";
import { MediaPreview } from "./MediaPreview";
import { FormPlaceholder } from "./FormPlaceholder";

import styles from "./UploadModalContent.module.scss";
interface Props {
  selectedFiles: FileList | null;
  setSelectedFiles: React.Dispatch<React.SetStateAction<FileList | null>>;
}

export const UploadModalContent = ({
  selectedFiles,
  setSelectedFiles,
}: Props) => {
  const id = useId();
  const [caption, setCaption] = useState("");
  const [previewURLs, setPreviewURLs] = useState<string[]>([]);

  useEffect(() => {
    if (!selectedFiles) return;

    const objectURLs: string[] = [];

    setPreviewURLs(
      Array.from(selectedFiles).map((file) => {
        const url = URL.createObjectURL(file);
        objectURLs.push(url);
        return url;
      })
    );

    return () =>
      objectURLs.forEach((objectURL) => URL.revokeObjectURL(objectURL));
  }, [selectedFiles]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) return;

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
      await createPost(formData);
      notify("success", "Upload Successful!");
      setSelectedFiles(null);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <section className={styles.FormSection}>
      <Container className={styles.FormContainer}>
        <form
          className={styles.Form}
          encType="multipart/form-data"
          onSubmit={(e) => handleSubmit(e)}
        >
          <FormHeader selectedFiles={selectedFiles} />
          <div className={styles.MainForm}>
            {!selectedFiles ? (
              <FormPlaceholder id={id} onChange={onChange} />
            ) : (
              <MediaPreview
                caption={caption}
                setCaption={setCaption}
                previewURLs={previewURLs}
              />
            )}
          </div>
        </form>
      </Container>
    </section>
  );
};
