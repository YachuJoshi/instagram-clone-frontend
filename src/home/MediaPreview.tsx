import cx from "classnames";
import { useState } from "react";
import NextImage from "next/image";
import { useAuth } from "../context";
import { Image } from "../components";

import styles from "./MediaPreview.module.scss";

interface Props {
  previewURLs: string[];
  caption: string;
  setCaption: React.Dispatch<React.SetStateAction<string>>;
}

export const MediaPreview = ({ previewURLs, caption, setCaption }: Props) => {
  const [index, setIndex] = useState(0);
  const { user } = useAuth();

  return (
    <div className={styles.Preview}>
      <div className={styles.MediaContainer}>
        <button
          type="button"
          className={cx(styles.Arrow, styles.Left, {
            [styles.Hidden]: index === 0,
          })}
          onClick={() => setIndex((index) => index - 1)}
        >
          <NextImage
            src="/arrowDark.svg"
            alt="Right Arrow"
            height="30"
            width="30"
          />
        </button>
        {previewURLs.map((url) => (
          <figure
            key={url}
            className={styles.PreviewFigure}
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
            src="/arrowDark.svg"
            alt="Right Arrow"
            height="30"
            width="30"
          />
        </button>
      </div>
      <div className={styles.MediaDetails}>
        <div className={styles.UserDetails}>
          <Image src="/user.jpg" alt="User" className={styles.UserImage} />
          <h2 className={styles.UserName}>{user.username}</h2>
        </div>
        <textarea
          value={caption}
          className={styles.Caption}
          placeholder="Write a caption...."
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>
    </div>
  );
};
