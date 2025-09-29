import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <h1>The page you are looking for does not exist</h1>
      <Link href="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
