const getAuthor = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return await response.json();
};

const BlogAuthor = async ({ id }) => {
  const author = await getAuthor(id);

  return (
    <div>
      <h2>Author: {author?.name ? author?.name : "unknown author"} </h2>
      <h2>Published: 29.11.2026 </h2>
    </div>
  );
};

export default BlogAuthor;
