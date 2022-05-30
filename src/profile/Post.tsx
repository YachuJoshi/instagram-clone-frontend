import NextImage from "next/image";
import { Image } from "../components";
import { getImageURL } from "../cloudinary";
import { Post as PostType } from "../types";

import styles from "./Post.module.scss";

interface Props {
  post: PostType;
}

export const Post = ({ post }: Props) => {
  const multipleMediasInPost = post.medias.length > 1;
  return (
    <figure key={post.id} className={styles.Post}>
      <NextImage
        src={getImageURL(post.medias[0].url)}
        alt="Demo"
        height="296"
        width="296"
        objectFit="cover"
      />
      {multipleMediasInPost && (
        <div className={styles.StackWrapper}>
          <Image alt="Logo" src="/copy.svg" className={styles.Stack} priority />
        </div>
      )}
    </figure>
  );
};
