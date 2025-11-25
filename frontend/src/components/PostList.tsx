import React from "react";
import { Post } from "./Post";
import type { PostProps } from "./Post";

export type PostListProps = {
  posts: PostProps[];
};

export const PostList = (props: PostListProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 m-auto">
      {props.posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            postId={post.postId}
            title={post.title}
            body={post.body}
            created_at={post.created_at}
            comments={post.comments}
          />
        );
      })}
    </div>
  );
};
