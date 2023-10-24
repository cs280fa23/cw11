import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PostAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src="https://ieeecs-media.computer.org/wp-media/2018/04/02170212/edsger-dijkstra-e1528238724590.jpg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default PostAvatar;
