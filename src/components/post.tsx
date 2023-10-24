import type { Post as PostType } from "@/lib/data";
import PostAvatar from "./post-avatar";
import PostHeader from "./post-header";
import PostFooter from "./post-footer";

const Post = ({ post }: { post: PostType }) => {
  return (
    <div className="flex border-b border-slate-400">
      <div className="p-4">
        <PostAvatar />
      </div>
      <div className="w-full pt-4 pr-4">
        <PostHeader />
        <div className="my-4">{post.content}</div>
        <PostFooter />
      </div>
    </div>
  );
};

export default Post;
