import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import styles from "./TopNavBar.module.scss";

export const TopNavBar = () => {
  return (
    <nav className={styles.TopNav}>
      <figure className="relative h-[50px] w-[140px]">
        <Image
          alt="Logo"
          src="/ig_logo.svg"
          layout="fill"
          objectFit="contain"
        />
      </figure>
      <ul className="">
        <li className="">
          <FiHeart />
        </li>
        <li>
          <RiMessengerLine />
        </li>
      </ul>
    </nav>
  );
};
