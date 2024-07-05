"use client";

import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Search from "@/public/search";
import { useState } from "react";
import { useSearch } from "@/context/SearchContext";

import type { FormEvent } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const [userInput, setUserInput] = useState("");
  const { setSearchQuery } = useSearch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/");
    setSearchQuery(userInput);

    setUserInput("");
  };

  return (
    <div className="navbar bg-base-100 rounded-lg sticky top-4 z-40 border-2 border-black ">
      <div className="flex-1">
        <Link href={"/"}>
          <Image priority src={logo} width={45} alt="logo"></Image>
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            type="text"
            className="grow "
            placeholder="Search"
          />
          <button
            onClick={() => handleSubmit}
            className="cursor-pointer h-5 w-5"
          >
            <Search />
          </button>
        </label>
      </form>
    </div>
  );
};

export default Navbar;
