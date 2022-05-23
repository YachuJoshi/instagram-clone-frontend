import {} from "react";
import { FiSearch } from "react-icons/fi";
import { IoHomeSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { CgAddR, CgShoppingBag } from "react-icons/cg";

import styles from "./BottomNav.module.scss";

const icons = [IoHomeSharp, FiSearch, CgAddR, CgShoppingBag, FaRegUserCircle];

export const BottomNav = () => {
  return (
    <div className={styles.BottomWrapper}>
      <hr />
      <nav className={styles.BottomNav}>
        <ul className={styles.IconList}>
          {icons.map((icon, index) => {
            const Icon = icon;
            return (
              <li key={index} className={styles.IconItem}>
                <Icon className={styles.Icon} />
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
