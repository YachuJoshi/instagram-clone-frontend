import { Post } from "./Post";
import { Post as PostType } from "../types";

interface Props {
  posts: PostType[];
  onPostClick: (id: number) => void;
}

export const Posts = ({ posts, onPostClick }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} onPostClick={onPostClick} />
      ))}
    </>
  );
};
