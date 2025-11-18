export const getComments = async (postId: number) => {
  const comments = fetch(`http://localhost:3002/comments/${postId}`).then(
    (data) => data.json()
  );

  return comments;
};
