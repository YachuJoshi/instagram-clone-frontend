import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={styles.Button}>{children}</button>;
};
