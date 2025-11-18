import React from "react";

const CommentField = () => {
  return (
    <form className="flex flex-row w-full justify-between gap-2">
      <input
        className="bg-blue-500 p-2 rounded-md hover:cursor-pointer hover:brightness-95 active:brightness-90"
        type="submit"
        value="Create"
      />
      <input
        className="min-w-0 bg-neutral-200 border-1 border-neutral-300 p-2 rounded-md shrink"
        type="text"
      />
    </form>
  );
};

export default CommentField;
