import { useState, useEffect, useId } from "react";
import { notify } from "../utils";
import { Container, Image } from "../components";
import { createPost } from "../services";

import styles from "./UploadModalContent.module.scss";

export const UploadModalContent = () => {
  const id = useId();
  const [caption, setCaption] = useState("Hello");
  const [previewURLs, setPreviewURLs] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

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
      // await createPost(formData);
      notify("success", "Upload Successful!");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <section className={styles.FormSection}>
      <Container className={styles.Container}>
        <div className={styles.FormContainer}>
          <div className={styles.FormHeader}>
            <h2 className={styles.FormHeading}>Create New Post</h2>
            <hr className={styles.Line} />
          </div>
          <form encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.MediaFigure}>
              <Image
                src="/media.svg"
                alt="Media"
                className={styles.MediaImage}
              />
              <figcaption>Upload Pictures / Videos</figcaption>
            </div>
            <label htmlFor={id} className={styles.UploadLabel}>
              Select From Computer
            </label>
            <input
              id={id}
              type="file"
              name="images"
              multiple
              onChange={onChange}
              className={styles.UploadButton}
            />
            {/* <button type="submit" disabled={selectedFiles === null}o>
              Submit
            </button>
            {selectedFiles && (
              <div>
                {previewURLs.map((url) => (
                  <img key={url} alt="PIC" src={url} />
                ))}
              </div>
            )} */}
          </form>
        </div>
      </Container>
    </section>
  );
};
