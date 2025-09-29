import BlogPost from "@/components/blog-post/BlogPost";

const BlogPage = () => {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <h1 className="bold text-2xl">Blog page</h1>
      <div className="grid grid-cols-4">
        <BlogPost />
      </div>
    </div>
  );
};

export default BlogPage;
