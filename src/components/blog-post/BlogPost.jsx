import Image from "next/image";
import Link from "next/link";

const BlogPost = ({ post }) => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src="https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg"
        alt="blog image"
        width={300}
        height={400}
      />
      <h2 className="font-bold text-xl"> {post.title} </h2>
      <p>{post.body}</p>
      <Link href={`/blog/${post.id}`} className="underline">
        Read more
      </Link>
    </div>
  );
};

export default BlogPost;
