import React, { FC } from "react";
import styles from "./ComponentHeader.module.css";
import { closeIcon } from "../../assets/Icons";
interface IProps {
  title: string;
  label: string;
  open: boolean;
  setOpen: React.ReactNode | any;
}
const ComponentHeader: FC<IProps> = ({ title, label, open, setOpen }) => {
  return (
    <div className={styles.component_head}>
      <h3>{title}</h3>
      {!open ? (
        <p onClick={() => setOpen(!open)}>{label}</p>
      ) : (
        <p onClick={() => setOpen(false)}>
          <img src={closeIcon} alt='' />
        </p>
      )}
    </div>
  );
};

export default ComponentHeader;
