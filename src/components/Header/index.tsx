import React from "react";
import styles from "./Header.module.css";
import { Logo } from "../../assets/images";
import { dropMenuIcon, dropdownIcon } from "../../assets/Icons";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <img src={Logo} alt='' />
      </div>
      <div className={styles.header_option}>
        <div className={styles.header_dropdown}>
          <img src={dropdownIcon} alt='' />
        </div>
        <div className={styles.header_menu}>
          <img src={dropMenuIcon} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
