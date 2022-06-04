import cx from "classnames";
import { Post } from "../types";
import { Image } from "../components";
import { getImageURL } from "../cloudinary";
import { BsSuitHeartFill, BsFillBookmarkFill } from "react-icons/bs";
import User from "../static/user.jpg";

import styles from "./ModalContent.module.scss";

interface Props {
  username: string;
  post: Post;
  onModalClose: () => void;
}
export const ModalContent = ({ username, post, onModalClose }: Props) => {
  return (
    <>
      <section className={cx(styles.Wrapper)}>
        <div className={styles.Overlay} onClick={onModalClose} />
        <article className={styles.Article}>
          <div className={styles.User}>
            <Image src={User} alt={username} className={styles.DP} />
            <h1 className={styles.Username}>{username}</h1>
          </div>
          <div className={styles.Post}>
            {post.medias.map((media) => {
              const { originalURL } = getImageURL(media.url);
              return (
                <Image
                  key={media.id}
                  src={originalURL}
                  alt={post.caption}
                  className={styles.Media}
                  priority
                />
              );
            })}
          </div>
          <div className={styles.BottomWrapper}>
            <div className={styles.IconWrapper}>
              <span className={styles.LeftIcons}>
                <BsSuitHeartFill className={styles.HeartIcon} />
                <Image
                  src="/comment.svg"
                  alt="Comment"
                  className={styles.CommentIcon}
                />
                <Image
                  src="/share.svg"
                  alt="Share"
                  className={styles.ShareIcon}
                />
              </span>
              {post.medias.length > 1 && (
                <span className={styles.IndexWrapper}>
                  {post.medias.map((_, i) => (
                    <span key={i} className={cx(styles.IndexCircle)} />
                  ))}
                </span>
              )}
              <BsFillBookmarkFill className={styles.SaveIcon} />
            </div>
            <div className={styles.ReviewsWrapper}>
              <p className={styles.LikeText}>
                Liked by <span>jennierubyjane</span> and{" "}
                <span>16,124 others</span>
              </p>
              <p className={styles.CaptionContainer}>
                <span className={styles.CaptionUsername}>{username}</span>{" "}
                <span className={styles.CaptionText}>{post.caption}</span>
              </p>
              <p className={styles.Date}>May 16</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
