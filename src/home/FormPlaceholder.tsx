import { Image } from "../components";

import styles from "./FormPlaceholder.module.scss";

interface Props {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormPlaceholder = ({ id, onChange }: Props) => {
  return (
    <>
      <div className={styles.MediaFigure}>
        <Image src="/media.svg" alt="Media" className={styles.MediaImage} />
        <figcaption>Upload Pictures / Videos</figcaption>
      </div>
      <label htmlFor={id} className={styles.UploadLabel}>
        Select From Computer
      </label>
      <input
        id={id}
        type="file"
        name="images"
        multiple
        onChange={onChange}
        className={styles.UploadButton}
      />
    </>
  );
};
