import NextImage from "next/image";
import { Image } from "../components";
import { getImageURL } from "../cloudinary";
import { Post as PostType } from "../types";

import styles from "./Post.module.scss";

interface Props {
  post: PostType;
  onPostClick: (id: number) => void;
}

export const Post = ({ post, onPostClick }: Props) => {
  const multipleMediasInPost = post.medias.length > 1;
  const { originalURL } = getImageURL(post.medias[0].url);

  return (
    <figure
      key={post.id}
      className={styles.Post}
      onClick={() => {
        onPostClick(post.id);
      }}
    >
      <NextImage
        src={originalURL}
        alt="Demo"
        height="296"
        width="296"
        objectFit="cover"
        priority
      />
      {multipleMediasInPost && (
        <div className={styles.StackWrapper}>
          <Image alt="Logo" src="/copy.svg" className={styles.Stack} priority />
        </div>
      )}
    </figure>
  );
};
