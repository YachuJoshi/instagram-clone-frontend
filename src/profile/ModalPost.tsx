import cx from "classnames";
import { Media } from "../types";
import NextImage from "next/image";
import { Image } from "../components";
import { getImageURL } from "../cloudinary";

import styles from "./ModalPost.module.scss";

interface PostProps {
  medias: Media[];
  caption: string;
  mediaIndex: number;
  setMediaIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ModalPost = ({
  caption,
  medias,
  mediaIndex,
  setMediaIndex,
}: PostProps) => {
  return (
    <div className={styles.Post}>
      <button
        className={cx(styles.Arrow, styles.Left, {
          [styles.Hidden]: mediaIndex === 0,
        })}
        onClick={() => setMediaIndex((prevIndex) => prevIndex - 1)}
      >
        <NextImage src="/arrow.svg" alt="Right Arrow" height="30" width="30" />
      </button>
      {medias.map((media) => {
        const { originalURL } = getImageURL(media.url);
        return (
          <Image
            style={{
              transform: `translate3d(calc(-${mediaIndex}*100%), 0, 0)`,
            }}
            key={media.id}
            src={originalURL}
            alt={caption}
            className={styles.Media}
            priority
          />
        );
      })}
      <button
        className={cx(styles.Arrow, styles.Right, {
          [styles.Hidden]: mediaIndex === medias.length - 1,
        })}
        onClick={() => setMediaIndex((prevIndex) => prevIndex + 1)}
      >
        <NextImage src="/arrow.svg" alt="Right Arrow" height="30" width="30" />
      </button>
    </div>
  );
};
