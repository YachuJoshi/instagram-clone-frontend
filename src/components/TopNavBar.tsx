import { Image } from "./Image";
import { NavIcons } from "./NavIcons";
import { Container } from "./Container";
import { InputField } from "./InputField";
import { RiSearchLine } from "react-icons/ri";

import styles from "./TopNavBar.module.scss";

export const TopNavBar = () => {
  return (
    <header className={styles.Header}>
      <Container>
        <nav className={styles.Nav}>
          <Image alt="Logo" src="/ig_logo.svg" className={styles.Logo} />
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
