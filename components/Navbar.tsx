import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Search from "@/public/search";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 rounded-lg sticky top-4 z-40 border-2 border-black ">
      <div className="flex-1">
        <Link href={"/"}>
          <Image priority src={logo} width={45} alt="logo"></Image>
        </Link>
      </div>

      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow " placeholder="Search" />
        <div className="cursor-pointer h-5 w-5">
          <Search />
        </div>
      </label>
    </div>
  );
};

export default Navbar;
