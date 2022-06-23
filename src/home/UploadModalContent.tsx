import { useState, useEffect, useId } from "react";
import cx from "classnames";
import NextImage from "next/image";
import { notify } from "../utils";
import { Container, Image } from "../components";
import { createPost } from "../services";

import styles from "./UploadModalContent.module.scss";

export const UploadModalContent = () => {
  const id = useId();
  const [index, setIndex] = useState(0);
  const [formStep, setFormStep] = useState(0);
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
            {/* <button type="submit" disabled={selectedFiles === null}o>
              Submit
            </button> */}
            {!selectedFiles ? (
              <>
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
              </>
            ) : (
              <div className={styles.Preview}>
                <button
                  type="button"
                  className={cx(styles.Arrow, styles.Left, {
                    [styles.Hidden]: index === 0,
                  })}
                  onClick={() => setIndex((index) => index - 1)}
                >
                  <NextImage
                    src="/arrow.svg"
                    alt="Right Arrow"
                    height="30"
                    width="30"
                  />
                </button>
                {previewURLs.map((url) => (
                  <figure
                    key={url}
                    className={styles.PreviewContainer}
                    style={{
                      transform: `translate3d(calc(-${index}*100%), 0, 0)`,
                    }}
                  >
                    <NextImage
                      src={url}
                      alt="Image"
                      width="100%"
                      height="100%"
                      objectFit="contain"
                    />
                  </figure>
                ))}
                <button
                  type="button"
                  className={cx(styles.Arrow, styles.Right, {
                    [styles.Hidden]: index === previewURLs.length - 1,
                  })}
                  onClick={() => setIndex((index) => index + 1)}
                >
                  <NextImage
                    src="/arrow.svg"
                    alt="Right Arrow"
                    height="30"
                    width="30"
                  />
                </button>
              </div>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
};
