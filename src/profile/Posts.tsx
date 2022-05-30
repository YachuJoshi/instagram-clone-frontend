import { Post as PostType } from "../types";
import { Post } from "./Post";

interface Props {
  posts: PostType[];
}

export const Posts = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
