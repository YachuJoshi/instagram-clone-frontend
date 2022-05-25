import cx from "classnames";
import styles from "./InputField.module.scss";

type InputProps = React.ComponentProps<"input">;

export const InputField = (props: InputProps) => {
  return <input className={cx(styles.Input, props.className)} {...props} />;
};
