interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className="">{children}</button>;
};
