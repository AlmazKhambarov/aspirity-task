import React, { useState } from "react";
import styles from "./EmployeeLoad.module.css";
import { Avatar, Tooltip } from "antd";
import { UsersList } from "../../../../mockdata";
import CustomModal from "../../../../components/Modal";
import TeamList from "../TeamList";
const EmployyeeLoad = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.employee_load}>
        <div className={styles.employee_title}>
          <p>Загрузка сотрудника</p>
          <p className={styles.percent}>100%</p>
        </div>
        <div className={styles.emloyeed_menu}>
          <div className={styles.employeed_item}>
            <span>Название проекта</span>
            <p>MedPoint 24</p>
          </div>
          <div className={styles.employeed_item}>
            <span>Тип проекта </span>
            <p>Коммерческий</p>
          </div>
          <div className={styles.employeed_item}>
            <span>Ответственный</span>
            <p>
              {" "}
              <Avatar src={UsersList[3].img} />
              Анна Кузнецова
            </p>
          </div>
          <div className={styles.employeed_item}>
            <span>Команда</span>
            <p className={styles.employeed_item_list}>
              {UsersList.slice(0, 7).map((el, idx) => (
                <div className={styles.employeed_item_card} key={idx}>
                  <img src={el.img} />
                </div>
              ))}
              <span onClick={()=>setOpen(!open)} className={styles.list_item_others}>+2</span>
            </p>
          </div>
          <div className={styles.employeed_item}>
            <span>Сроки работы</span>
            <p>03 марта 2023-03 марта 2023</p>
          </div>
        </div>
        <button className={styles.load_btn} onClick={()=>setOpen(!open)}>Посмотреть всю загрузку</button>
      </div>
      <CustomModal open={open} setOpen={setOpen}>
        <TeamList open={open} setOpen={setOpen}/>
      </CustomModal>
    </>
  );
};

export default EmployyeeLoad;
