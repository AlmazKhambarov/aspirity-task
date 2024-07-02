/** @format */

import { Breadcrumb } from "antd";
import React, { FC } from "react";
import styles from "./GoToBack.module.css"
import { goBackIcon } from "../../assets/Icons";
interface IProps {
  link?: string;
  title: string;
}
const GoToBack: FC<IProps> = ({
  link = "/",
  title = "Вернуться к сотрудникам",
}) => {
  return (
    <div className={styles.goback}>
      <a href={link} className={styles.goback_link}>
        <img src={goBackIcon} alt='' />
        <p className={styles.goback_title}>{title}</p>
      </a>
    </div>
  );
};

export default GoToBack;
