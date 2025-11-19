import React, { useEffect, useRef, useState } from "react";
import CommentField from "./CommentField";

export type CommentProps = {
  id: number;
  post_id: number;
  body: string;
};

export type PostProps = {
  id: number;
  title: string;
  body: string;
  date: string;
};

export const Post = (props: PostProps) => {
  const [comments, setComments] = useState<CommentProps[]>([]);

  useEffect(() => {
    const getComments = async () => {
      await fetch(`/posts/${props.id}/comments`)
        .then((data) => data.json())
        .then((json) => setComments(json));
    };

    getComments();
  }, []);

  return (
    <div className="w-64 min-h-64 flex flex-col bg-neutral-100 p-3 rounded-md shadow-lg">
      <div className="flex flex-row justify-between">
        <p className="text-2xl">{props.title}</p>
        <p className="self-end">{props.date}</p>
      </div>
      <hr className="my-2" />
      <p>{props.body}</p>
      <hr className="my-2" />
      <p>Comments:</p>
      <ul className="mb-5 flex flex-col">
        {comments.map((comment, index) => {
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
