import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchResult } from "@/utils/fetchFromAPI";
import { ApiResponse, Item } from "@/utils/interfaces";
import { useSearch } from "@/context/SearchContext";

const Feed = () => {
  const { searchQuery } = useSearch();
  const [selectedCategory, setSelectedCategory] = useState("last news");
  const [fetchedResults, setFetchedResults] = useState<Item[] | null>(null);

  useEffect(() => {
    if (searchQuery) {
      fetchResult(`search?part=snippet&q=${searchQuery}`).then(
        (data: ApiResponse) => {
          setFetchedResults(data.items);
        }
      );
    }
  }, [searchQuery]);

  useEffect(() => {
    if (selectedCategory !== "last news" || !searchQuery) {
      fetchResult(`search?part=snippet&q=${selectedCategory}`).then(
        (data: ApiResponse) => {
          setFetchedResults(data.items);
        }
      );
    }
  }, [selectedCategory]);

  return (
    <div className="flex w-full ">
      <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="m-4">
        <section className=" w-full ">
          <Videos items={fetchedResults} />
        </section>
      </div>
    </div>
  );
};

export default Feed;
