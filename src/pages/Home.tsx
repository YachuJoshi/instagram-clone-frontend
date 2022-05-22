import { NextPage } from "next";
import { MainLayout } from "../layout";
import { Container } from "@/components";

export const Home: NextPage = () => {
  return (
    <MainLayout title="Home Page">
      <Container>Hello</Container>
    </MainLayout>
  );
};
