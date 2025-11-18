import React from "react";

export const CreatePost = () => {
  return (
    <div className="bg-blue-400 w-96 p-2 m-auto rounded-md shadow-lg mt-10">
      <form action="">
        <div className="flex flex-col my-2">
          <label htmlFor="title">Title</label>
          <input
            className="bg-white p-2 rounded-md"
            type="text"
            id="title"
            name="title"
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="body">Body</label>
          <textarea
            className="bg-white p-2 rounded-md"
            name="body"
            id="body"
          ></textarea>
        </div>
        <div>
          <input
            className="bg-blue-500 p-2 rounded-md hover:cursor-pointer hover:brightness-95 active:brightness-90"
            type="submit"
            value="Create"
          />
        </div>
      </form>
    </div>
  );
};
