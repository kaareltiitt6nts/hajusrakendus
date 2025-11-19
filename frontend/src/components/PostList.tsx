import React from "react";
import { Post } from "./Post";
import type { PostProps } from "./Post";

export type PostListProps = {
  posts: PostProps[];
};

export const PostList = (props: PostListProps) => {
  return (
    <div className="flex flex-wrap gap-2 size-fit m-auto">
      {props.posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            date={post.date}
          />
        );
      })}
    </div>
  );
};
