"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  // {
  //   title: "Admin",
  //   path: "/admin",
  // },
  // {
  //   title: "Login",
  //   path: "/login",
  // },
];

// Temporary
const session = true;
const isAdmin = true;

const Links = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.path}
          className={cn(pathname === link.path && "underline")}
        >
          {link.title}
        </Link>
      ))}
      {session ? (
        <>
          {isAdmin && (
            <Link
              href="/admin"
              className={cn(pathname === "/admin" && "underline")}
            >
              Admin
            </Link>
          )}
          <Button>Logout</Button>
        </>
      ) : (
        <Link
          href="/login"
          className={cn(pathname === "/login" && "underline")}
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Links;
