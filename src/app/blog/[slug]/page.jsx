import Image from "next/image";
import { Suspense } from "react";
import BlogAuthor from "@/components/blog-post/BlogAuthor";
import { getPost } from "@/lib/data";

const SingleBlogPage = async ({ params }) => {
  const { slug } = await params;
  // console.log(slug);
  const post = await getPost(slug);
  console.log(post.userId);

  return (
    <div className="flex flex-col gap-4">
      <Image
        src={post.image || "/noavatar.png"}
        alt="blog image"
        width={300}
        height={400}
      />
      <h2 className="font-bold text-xl"> {post.title} </h2>
      <p>{post.description}</p>
      <div className="flex gap-4 items-center">
        <Image
          src="/noavatar.png"
          alt="author image"
          width={50}
          height={50}
          className="rounded-full"
        />

        <Suspense fallback={<p>Loading author...</p>}>
          <BlogAuthor id={post.userId} />
        </Suspense>
      </div>
      <p>{post.body}</p>
    </div>
  );
};

export default SingleBlogPage;
