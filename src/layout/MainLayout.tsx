import Head from "next/head";
import { TopNavBar } from "@/components";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const MainLayout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <TopNavBar />
      {children}
    </>
  );
};
