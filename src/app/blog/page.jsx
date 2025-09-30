import BlogPost from "@/components/blog-post/BlogPost";
import { getPosts } from "@/lib/data";

const BlogPage = async () => {
  const posts = await getPosts();

  // console.log("posts: ", posts);

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
