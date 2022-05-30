import { Image } from "./Image";
import { NavIcons } from "./NavIcons";
import { Container } from "./Container";
import { InputField } from "./InputField";
import { RiSearchLine } from "react-icons/ri";

import styles from "./TopNavBar.module.scss";
import Link from "next/link";

export const TopNavBar = () => {
  return (
    <header className={styles.Header}>
      <Container>
        <nav className={styles.Nav}>
          <Link href="/">
            <a>
              <Image
                alt="Logo"
                src="/ig_logo.svg"
                className={styles.Logo}
                priority
              />
            </a>
          </Link>
          <div className={styles.InputContainer}>
            <RiSearchLine className={styles.Icon} />
            <InputField type="search" placeholder="Search" />
          </div>
          <NavIcons />
        </nav>
      </Container>
    </header>
  );
};
