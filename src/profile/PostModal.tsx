import { useState } from "react";
import cx from "classnames";
import { Post } from "../types";
import { Image } from "../components";
import { ModalPost } from "./ModalPost";
import { PostDetails } from "./PostDetails";

import styles from "./PostModal.module.scss";

interface Props {
  username: string;
  post: Post;
}

export const PostModal = ({ username, post }: Props) => {
  const [mediaIndex, setMediaIndex] = useState(0);

  if (!post) return null;
  const date = new Date(post.createdAt as string) || new Date();

  return (
    <>
      <section className={cx(styles.Wrapper)}>
        <article className={styles.Article}>
          <div className={styles.User}>
            <Image src="/user.jpg" alt={username} className={styles.DP} />
            <h1 className={styles.Username}>{username}</h1>
          </div>
          <ModalPost
            mediaIndex={mediaIndex}
            setMediaIndex={setMediaIndex}
            caption={post.caption}
            medias={post.medias}
          />
          <PostDetails
            username={username}
            caption={post.caption}
            medias={post.medias}
            date={date}
            mediaIndex={mediaIndex}
          />
        </article>
      </section>
    </>
  );
};
