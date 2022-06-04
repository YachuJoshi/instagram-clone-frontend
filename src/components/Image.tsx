import NextImage from "next/image";
import cx from "classnames";

import styles from "./Image.module.scss";

type ImageProps = React.ComponentProps<typeof NextImage> & {
  className?: string;
  style?: React.CSSProperties;
};

export const Image = ({ className, style, ...props }: ImageProps) => {
  return (
    <figure className={cx(styles.Figure, className)} style={{ ...style }}>
      <NextImage {...props} layout="fill" objectFit="contain" />
    </figure>
  );
};
