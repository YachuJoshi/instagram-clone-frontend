import cx from "classnames";
import styles from "./Container.module.scss";
interface ContainerProps extends React.ComponentProps<"section"> {
  children: React.ReactNode;
}

export const Container = ({
  className = "",
  children,
  ...rest
}: ContainerProps) => {
  return (
    <section className={cx(styles.Container, className)} {...rest}>
      {children}
    </section>
  );
};
