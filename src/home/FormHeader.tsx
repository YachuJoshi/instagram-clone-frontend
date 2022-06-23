import cx from "classnames";
import { Button } from "../components";

import styles from "./FormHeader.module.scss";

interface Props {
  selectedFiles: FileList | null;
}

export const FormHeader = ({ selectedFiles }: Props) => {
  return (
    <div className={styles.FormHeader}>
      <div
        className={cx(styles.FormHeaderGroup, {
          [styles.Selected]: selectedFiles !== null,
        })}
      >
        <h2 className={styles.FormHeading}>Create New Post</h2>
        {selectedFiles && (
          <Button
            type="submit"
            disabled={selectedFiles === null}
            className={styles.Button}
          >
            Post
          </Button>
        )}
      </div>
      <hr className={styles.Line} />
    </div>
  );
};
