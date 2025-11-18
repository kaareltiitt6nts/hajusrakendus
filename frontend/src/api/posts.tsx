export const getPosts = async () => {
  const posts = await fetch("http://localhost:3001/posts").then((data) =>
    data.json()
  );

  return posts;
};
