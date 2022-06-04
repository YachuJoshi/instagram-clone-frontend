import { Media } from "../types";
import { Image } from "../components";
import { BsSuitHeartFill, BsFillBookmarkFill } from "react-icons/bs";

import styles from "./PostDetails.module.scss";

interface Props {
  username: string;
  caption: string;
  medias: Media[];
  date: Date;
}

export const PostDetails = ({ username, caption, date, medias }: Props) => {
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.PostDetails}>
      <div className={styles.IconWrapper}>
        <span className={styles.LeftIcons}>
          <BsSuitHeartFill className={styles.Icon} />
          <Image src="/comment.svg" alt="Comment" className={styles.Icon} />
          <Image src="/share.svg" alt="Share" className={styles.Icon} />
        </span>
        {medias.length > 1 && (
          <span className={styles.IndexWrapper}>
            {medias.map((_, i) => (
              <span key={i} className={styles.IndexCircle} />
            ))}
          </span>
        )}
        <BsFillBookmarkFill className={styles.SaveIcon} />
      </div>
      <div className={styles.Reviews}>
        <p className={styles.LikeText}>
          Liked by <span>jennierubyjane</span> and <span>16,124 others</span>
        </p>
        <p className={styles.CaptionContainer}>
          <span className={styles.CaptionUsername}>{username}</span>{" "}
          <span className={styles.CaptionText}>{caption}</span>
        </p>
        <p className={styles.Date}>{formattedDate}</p>
      </div>
    </div>
  );
};
