import React, { useEffect, useState } from "react";
import CommentField from "./CommentField";

export type CommentProps = {
  id: string;
  postId: string;
  body: string;
};

export type PostProps = {
  id: string;
  postId: string;
  title: string;
  body: string;
  created_at: string;
  comments: CommentProps[];
};

export const Post = (props: PostProps) => {
  return (
    <div className="w-64 min-h-64 flex flex-col bg-neutral-100 p-3 rounded-md shadow-lg">
      <div className="flex flex-row justify-between">
        <p className="text-2xl">{props.title}</p>
        <p className="self-end">{props.created_at}</p>
      </div>
      <hr className="my-2" />
      <p>{props.body}</p>
      <hr className="my-2" />
      <p>Comments:</p>
      <ul className="mb-5 flex flex-col overflow-y-scroll h-48">
        {props.comments.map((comment, index) => {
          return (
            <li
              key={index}
              className="bg-blue-200 bg- p-1 rounded-md my-2"
            >{`${comment.body}`}</li>
          );
        })}
      </ul>
      <div className="mt-auto">
        <CommentField />
      </div>
    </div>
  );
};
