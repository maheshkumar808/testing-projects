export const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
  });
  return await response.json();
};

export const getcomments = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/comments',
    {
      method: 'GET',
    },
  );
  return await response.json();
};
