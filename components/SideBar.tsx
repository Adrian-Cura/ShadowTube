import { useState } from "react";
import { useSearch } from "@/context/SearchContext";

interface ChildComponentProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar = ({
  selectedCategory,
  setSelectedCategory,
}: ChildComponentProps) => {
  const [liStyle, setLiStyle] = useState("");

  const { setSearchQuery } = useSearch();

  const handleClick = (category: string) => {
    setSelectedCategory("");
    setSearchQuery(undefined);
    setSelectedCategory(category);
    setLiStyle("bg-[#c61717] font-bold");
  };

  const categories = [
    "Shaka Lawliet",
    "Music",
    "Sports",
    "Programming",
    "Traveling",
    "VideoGames",
    "Anime",
    "Technology",
    "World news",
    "Life coaching",
  ];

  return (
    <menu className="mt-3 sticky left-0 top-24 h-[60vh] z-20 flex-col">
      <ul className="menu bg-base-200 w-56 rounded-lg gap-3">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`rounded-xl ${
              selectedCategory === category ? liStyle : ""
            }  transition-all duration-200 ease-in-out hover:bg-[#c61717] hover:font-bold `}
          >
            <a onClick={() => handleClick(category)}>{category}</a>
          </li>
        ))}
      </ul>
    </menu>
  );
};

export default SideBar;
