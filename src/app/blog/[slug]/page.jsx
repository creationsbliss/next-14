import Image from "next/image";
import { Suspense } from "react";
import BlogAuthor from "@/components/blog-post/BlogAuthor";

const getPost = async (slug) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );
  return await response.json();
};

const SingleBlogPage = async ({ params }) => {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <div className="flex flex-col gap-4">
      <Image
        src="https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg"
        alt="blog image"
        width={300}
        height={400}
      />
      <h2 className="font-bold text-xl"> {post.title} </h2>
      <div className="flex gap-4 items-center">
        <Image
          src="/noavatar.png"
          alt="author image"
          width={50}
          height={50}
          className="rounded-full"
        />

        <Suspense fallback={<p>Loading author...</p>}>
          <BlogAuthor id={slug} />
        </Suspense>
      </div>
      <p>{post.body}</p>
    </div>
  );
};

export default SingleBlogPage;
