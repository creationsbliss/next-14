import { getUser } from "@/lib/data";

const BlogAuthor = async ({ id }) => {
  // console.log(id);
  const author = await getUser(id);

  // console.log(author);

  return (
    <div>
      <h2>Author: {author?.username ? author?.username : "unknown author"} </h2>
      <h2>Published: 29.11.2026 </h2>
    </div>
  );
};

export default BlogAuthor;
