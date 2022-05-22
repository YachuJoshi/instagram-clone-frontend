import cx from "classnames";
interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  const styles = "max-w-[936px] mx-auto my-0 w-full";
  return <div className={cx(styles, className)}>{children}</div>;
};
