import Image from "next/image";
import Link from "next/link";

const BlogPost = ({ post }) => {
  // console.log(post);
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
      <Link href={`/blog/${post.slug}`} className="underline">
        Read more
      </Link>
    </div>
  );
};

export default BlogPost;
