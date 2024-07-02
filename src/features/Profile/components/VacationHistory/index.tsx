/** @format */

import React, { FC } from "react";
import styles from "./VacationHistory.module.css";
import { List } from "../../../../mockdata";

import ComponentHeader from "../../../../components/ComponentHeader";
import { IModal } from "../../interface";

const VacationHistory: FC<IModal> = ({ setOpen, open }) => {
  return (
    <div className={styles.profile}>
      <ComponentHeader title="История отпусков" label="Посмотреть все" setOpen={setOpen} open={open}/>
      <div className={styles.profile__list}>
        <div className={styles.profile__list_top}>
          <div>
            <p>Тип</p>
          </div>

          <div className={styles.profile__item_block}>
            <p>Даты отпуска</p>
          </div>

          <div>
            <span>Количество дней</span>
          </div>
        </div>

        {List.map((el: any, idx: number) => (
          <div key={idx} className={styles.profile__item}>
            <div>
              <p className={styles.profile__mobile_title}>Тип</p>
              <p className={styles.profile__item_type}>{el.type}</p>
            </div>

            <div className={styles.profile__item_block}>
              <p className={styles.profile__mobile_title}>Даты отпуска</p>

              <div>
                <span>{el.dateStart}</span>
                <img src={el.icon} alt='img' />
                <span>{el.dateEnd}</span>
              </div>
            </div>

            <div>
              <p className={styles.profile__mobile_title}>Количество дней</p>
              <span className={styles.profile__item_count}>{el.countDays}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VacationHistory;
