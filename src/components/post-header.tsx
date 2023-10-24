const PostHeader = () => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-sm font-medium leading-none">Edsger Dijkstra</p>
        <p className="text-sm text-muted-foreground">@dijkstra</p>
      </div>
      <p className="text-sm text-muted-foreground">1h</p>
    </div>
  );
};

export default PostHeader;
