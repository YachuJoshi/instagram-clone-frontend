import { GetStaticProps, GetStaticPaths } from "next";
import { getAllUsers, getUserByUsername } from "@/services";
import { ParsedUrlQuery } from "querystring";
import { User } from "@/types";
import { Profile } from "@/pages";

interface CustomParams extends ParsedUrlQuery {
  username: string;
}

interface Props {
  user: User;
}

function ProfilePage({ user }: Props) {
  return <Profile user={user} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { username } = context.params as CustomParams;
  const user = await getUserByUsername(username);
  return {
    props: {
      user,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await getAllUsers();
  return {
    paths: users.map((user) => ({
      params: {
        username: String(user.username),
      },
    })),
    fallback: false,
  };
};

export default ProfilePage;
