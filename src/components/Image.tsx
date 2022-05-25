import NextImage from "next/image";
import cx from "classnames";

import styles from "./Image.module.scss";

type ImageProps = React.ComponentProps<typeof NextImage> & {
  className?: string;
};

export const Image = ({ className, ...props }: ImageProps) => {
  return (
    <figure className={cx(styles.Figure, className)}>
      <NextImage {...props} layout="fill" objectFit="contain" />
    </figure>
  );
};
