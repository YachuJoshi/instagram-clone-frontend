import Image from "next/image";
import { NavIcons } from "./NavIcons";
import { RiSearchLine } from "react-icons/ri";

import styles from "./TopNavBar.module.scss";

export const TopNavBar = () => {
  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <figure className={styles.Figure}>
          <Image
            alt="Logo"
            src="/ig_logo.svg"
            layout="fill"
            objectFit="contain"
          />
        </figure>
        <div className={styles.InputContainer}>
          <RiSearchLine className={styles.Icon} />
          <input type="search" placeholder="Search" />
        </div>
        <NavIcons />
      </nav>
    </header>
  );
};
