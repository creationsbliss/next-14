"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:block">
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
      </div>

      <div>
        <MenuIcon
          className="block lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        {isOpen && (
          <div className="flex flex-col items-start gap-8 mt-8 block lg:hidden">
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
        )}
      </div>
    </>
  );
};

export default Links;
