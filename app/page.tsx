"use client";

import Navbar from "@/components/Navbar";
import { fetchResult } from "@/utils/fetchFromAPI";
import Feed from "@/components/Feed";

const handleClick = () => {
  fetchResult("search?part=snippet&q=Music");
};

export default function Home() {
  return (
    <div>
      <Feed />
    </div>
  );
}
