import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { IoHomeSharp } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import User from "../static/user.jpg";

export const NavIcons = () => {
  return (
    <ul className="flex gap-x-4 sm:gap-x-5">
      <li className="hidden sm:block">
        <IoHomeSharp className="h-6 w-6" />
      </li>
      <li>
        <RiMessengerLine className="h-7 w-7 sm:h-6 sm:w-6" />
      </li>
      <li className="hidden sm:block">
        <CgAddR className="h-6 w-6" />
      </li>
      <li className="hidden sm:block">
        <FaRegCompass className="h-6 w-6" />
      </li>
      <li>
        <FiHeart className="h-7 w-7 sm:h-6 sm:w-6" />
      </li>
      <li className="hidden sm:block">
        <figure className="relative h-7 w-7 rounded-full overflow-hidden">
          <Image alt="Logo" src={User} layout="fill" objectFit="contain" />
        </figure>
      </li>
    </ul>
  );
};
