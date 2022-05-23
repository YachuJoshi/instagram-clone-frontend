import cx from "classnames";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: string;
  className?: string;
} & Omit<React.ComponentProps<"button">, "children">;

export const Button = ({ children, className = "", ...rest }: ButtonProps) => {
  return (
    <button className={cx(styles.Button, className)} {...rest}>
      {children}
    </button>
  );
};
