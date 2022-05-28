import Link from "next/link";
import cx from "classnames";
import { useAuth } from "../context";
import { Image } from "../components";
import { CgAddR } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { FaRegCompass } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { RiMessengerLine } from "react-icons/ri";

import User from "../static/user.jpg";
import styles from "./NavIcons.module.scss";

export const NavIcons = () => {
  const { user } = useAuth();

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
        <Link href={`/${user.username}`}>
          <a>
            <Image
              alt="Logo"
              src={User}
              layout="fill"
              objectFit="contain"
              className={styles.Figure}
            />
          </a>
        </Link>
      </li>
    </ul>
  );
};
