import cx from "classnames";
import { Post } from "../types";
import { Image } from "../components";
import { ModalPost } from "./ModalPost";
import { PostDetails } from "./PostDetails";

import styles from "./ModalContent.module.scss";

interface Props {
  username: string;
  post: Post;
  onModalClose: () => void;
}
export const ModalContent = ({ username, post, onModalClose }: Props) => {
  const date = new Date(post.createdAt as string) || new Date();

  return (
    <>
      <section className={cx(styles.Wrapper)}>
        <div className={styles.Overlay} onClick={onModalClose} />
        <article className={styles.Article}>
          <div className={styles.User}>
            <Image src="/user.jpg" alt={username} className={styles.DP} />
            <h1 className={styles.Username}>{username}</h1>
          </div>
          <ModalPost caption={post.caption} medias={post.medias} />
          <PostDetails
            username={username}
            caption={post.caption}
            medias={post.medias}
            date={date}
          />
        </article>
      </section>
    </>
  );
};
