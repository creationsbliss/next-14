import Image from "next/image";
import Link from "next/link";

const BlogPost = () => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src="https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg"
        alt="blog image"
        width={300}
        height={400}
      />
      <h2 className="font-bold text-xl"> Blog Title</h2>
      <p>
        Nostra felis fermentum dignissim dictum consectetuer turpis sed
        imperdiet parturient montes aenean mattis lacinia blandit eget bibendum
        senectus ultricies tincidunt pharetra amet congue facilisi phasellus
        netus ante enim conubia at elit ad accumsan quam ex{" "}
      </p>
      <Link href="/blog/post" className="underline">
        Read more
      </Link>
    </div>
  );
};

export default BlogPost;
