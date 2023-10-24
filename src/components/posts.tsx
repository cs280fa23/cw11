import { posts } from "@/lib/data";
import Post from "./post";

const Posts = () => {
  return (
    <div className="">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
