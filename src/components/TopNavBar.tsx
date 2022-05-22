import Image from "next/image";
import { NavIcons } from "./NavIcons";
import { RiSearchLine } from "react-icons/ri";

export const TopNavBar = () => {
  return (
    <nav className="p-5 flex items-center justify-between">
      <figure className="relative h-12 w-36 sm:h-10 sm:w-28">
        <Image
          alt="Logo"
          src="/ig_logo.svg"
          layout="fill"
          objectFit="contain"
        />
      </figure>
      <div className="hidden md:flex items-center gap-x-4 px-6 py-2 bg-[#EFEFEF] rounded-lg">
        <RiSearchLine className="fill-[#898989] h-4 w-4" />
        <input
          type="search"
          placeholder="Search"
          className="bg-[#EFEFEF] outline-none placeholder:text-[#898989]"
        ></input>
      </div>
      <NavIcons />
    </nav>
  );
};
