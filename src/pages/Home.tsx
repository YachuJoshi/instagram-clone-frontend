import { withAuth } from "../auth";
import { MainLayout } from "../layout";
import { Container } from "../components";

export const Home = withAuth(() => {
  return (
    <MainLayout title="Home Page">
      <Container>Hello</Container>
    </MainLayout>
  );
});
