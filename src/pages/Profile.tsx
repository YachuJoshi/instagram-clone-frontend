import { Container } from "@/components";
import { MainLayout } from "src/layout";
import { User } from "../types";

interface Props {
  user: User;
}

export const Profile = ({ user }: Props) => {
  return (
    <MainLayout
      title={`${user.firstName} ${user.lastName} (@${user.username})`}
    >
      <Container>{user.username}</Container>
    </MainLayout>
  );
};
