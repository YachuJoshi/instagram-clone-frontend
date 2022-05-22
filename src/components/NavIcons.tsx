import Image from "next/image";
import cx from "classnames";

import User from "../static/user.jpg";
import { CgAddR } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { FaRegCompass } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { RiMessengerLine } from "react-icons/ri";

import styles from "./NavIcons.module.scss";

export const NavIcons = () => {
  return (
    <ul className={styles.IconList}>
      <li className={cx(styles.Item, styles.Hidden)}>
        <IoHomeSharp className={styles.Icon} />
      </li>
      <li className={styles.Item}>
        <RiMessengerLine className={styles.Icon} />
      </li>
      <li className={cx(styles.Item, styles.Hidden)}>
        <CgAddR className={styles.Icon} />
      </li>
      <li className={cx(styles.Item, styles.Hidden)}>
        <FaRegCompass className={styles.Icon} />
      </li>
      <li className={styles.Item}>
        <FiHeart className={styles.Icon} />
      </li>
      <li className={cx(styles.Item, styles.Hidden)}>
        <figure className={styles.Figure}>
          <Image alt="Logo" src={User} layout="fill" objectFit="contain" />
        </figure>
      </li>
    </ul>
  );
};
