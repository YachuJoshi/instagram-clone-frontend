import cx from "classnames";
import styles from "./Container.module.scss";
interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  return <div className={cx(styles.Container, className)}>{children}</div>;
};
