interface ChildComponentProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar = ({
  selectedCategory,
  setSelectedCategory,
}: ChildComponentProps) => {
  return (
    <menu className="mt-3 sticky left-0 top-24 h-[60vh] z-20 flex-col">
      <ul className="menu bg-base-200 w-56 rounded-lg gap-3">
        <li className=" rounded-xl   transition-all duration-200 ease-in-out hover:bg-[#c61717] hover:font-bold ">
          <a onClick={() => setSelectedCategory("New")}>New</a>
        </li>
        <li className=" rounded-xl   transition-all duration-200 ease-in-out hover:bg-[#c61717] hover:font-bold">
          <a onClick={() => setSelectedCategory("Shaka Lawliet")}>
            Shaka Lawliet
          </a>
        </li>
        <li className="rounded-xl   transition-all duration-200 ease-in-out hover:bg-[#c61717] hover:font-bold">
          <a onClick={() => setSelectedCategory("Musica")}>Music</a>
        </li>
        <li className="rounded-xl   transition-all duration-200 ease-in-out hover:bg-[#c61717] hover:font-bold">
          <a>Item1</a>
        </li>
        <li className="rounded-xl   transition-all duration-200 ease-in-out hover:bg-[#c61717] hover:font-bold">
          <a>Item2</a>
        </li>
        <li className="rounded-xl   transition-all duration-200 ease-in-out hover:bg-[#c61717] hover:font-bold">
          <a>Item3</a>
        </li>
        <li className="rounded-xl   transition-all duration-200 ease-in-out hover:bg-[#c61717] hover:font-bold">
          <a>Item4</a>
        </li>
        <li className="rounded-xl   transition-all duration-200 ease-in-out hover:bg-[#c61717] hover:font-bold">
          <a>Item5</a>
        </li>
        <li className="rounded-xl   transition-all duration-200 ease-in-out hover:bg-[#c61717] hover:font-bold">
          <a>Item6</a>
        </li>
      </ul>
    </menu>
  );
};

export default SideBar;
