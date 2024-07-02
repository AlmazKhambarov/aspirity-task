import React, { useState } from "react";
import VacationHistory from "../VacationHistory";
import VacationStatistics from "../VacationStatistics";
import styles from "./Vacation.module.css";
import CustomModal from "../../../../components/Modal";

const Vacation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.vacation}>
      <VacationStatistics />
      <VacationHistory open={open} setOpen={setOpen} />
      <CustomModal open={open} setOpen={setOpen}>
        <VacationHistory open={open} setOpen={setOpen} />
      </CustomModal>
    </div>
  );
};

export default Vacation;
