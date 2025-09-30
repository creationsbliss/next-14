import BlogPost from "@/components/blog-post/BlogPost";

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
};

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-10 mt-10">
      <h1 className="bold text-2xl">Blog page</h1>
      <div className="grid grid-cols-4">
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
