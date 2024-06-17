import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchResult } from "@/utils/fetchFromAPI";
import { ApiResponse, Item } from "@/utils/interfaces";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [fetchedResults, setFetchedResults] = useState<Item[] | null>(null);

  useEffect(() => {
    fetchResult(`search?part=snippet&q=${selectedCategory}`).then(
      (data: ApiResponse) => {
        setFetchedResults(data.items);
      }
    );
  }, [selectedCategory]);

  return (
    <div className="flex">
      <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="m-4">
        <h1 className="font-bold text-2xl">
          {selectedCategory} <span className=" text-[#c61717]">videos</span>
        </h1>
        <Videos items={fetchedResults} />
      </div>
    </div>
  );
};

export default Feed;
