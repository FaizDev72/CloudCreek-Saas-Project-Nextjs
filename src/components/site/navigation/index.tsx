"use client";

import { ModeToggle } from "@/components/global/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  user?: null | User;
};

const Navigation = ({ user }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to track scroll position and toggle background color
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true); // Activate solid background when scrolled
      } else {
        setIsScrolled(false); // Keep background transparent when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-20 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-[#03070F] shadow-md" : "bg-transparent"
      }`}
    >
      <aside className="flex items-center gap-2">
        <Image
          src={"./assets/cloudcreek-logo.svg"}
          alt="cloudcreek"
          width={40}
          height={40}
        />
        <span className="text-xl font-bold dark:text-primary">CloudCreek.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#"} className="text-black dark:text-white">
            Pricing
          </Link>
          <Link href={"#"} className="text-black dark:text-white">
            About
          </Link>
          <Link href={"#"} className="text-black dark:text-white">
            Documentation
          </Link>
          <Link href={"#"} className="text-black dark:text-white">
            Features
          </Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link
          href={"/agency"}
          className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
        >
          Login
        </Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
