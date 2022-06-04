import { Media } from "../types";
import { Image } from "../components";
import { getImageURL } from "../cloudinary";

import styles from "./ModalPost.module.scss";

interface PostProps {
  medias: Media[];
  caption: string;
}

export const ModalPost = ({ caption, medias }: PostProps) => {
  return (
    <div className={styles.Post}>
      {medias.map((media) => {
        const { originalURL } = getImageURL(media.url);
        return (
          <Image
            key={media.id}
            src={originalURL}
            alt={caption}
            className={styles.Media}
            priority
          />
        );
      })}
    </div>
  );
};
