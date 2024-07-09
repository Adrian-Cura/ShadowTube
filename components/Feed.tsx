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
      setSelectedCategory("last news");
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
    <div className="  flex flex-col sm:flex-row w-full ">
      <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="lg:m-4  h-full   w-screen ">
        <section>
          <div className="text-center     ">
            <h1 className=" font-bold text-2xl text-center mt-6 xl:mt-2  ">
              {selectedCategory === "last news" &&
                !searchQuery &&
                selectedCategory}
              {selectedCategory !== "last news" &&
                !searchQuery &&
                selectedCategory}
              {searchQuery && searchQuery}
              <span className=" text-red-600 "> Videos</span>
            </h1>
          </div>

          <Videos items={fetchedResults} />
        </section>
      </div>
    </div>
  );
};

export default Feed;
