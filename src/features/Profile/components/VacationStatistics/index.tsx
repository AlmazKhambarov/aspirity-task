import { Chart } from "react-chartjs-2";
import React, { useState, useEffect, useMemo } from "react";
import styles from "./VacationStatistics.module.css";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Tooltip } from "antd";
import {
  greenDot,
  infoIcon,
  redDot,
  yellowDot,
} from "../../../../assets/Icons";

ChartJS.register(ArcElement, Legend);

const VacationStatistics = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index: any) => {
    setActiveItem(index);
  };
  const [chartData, setChartData] = useState({
    labels: ["Доступно сейчас", "Запланировано", "Использовано/недоступно"],
    datasets: [
      {
        name: "React",
        data: [30, 4, 10],
        backgroundColor: ["#4CAF50", "#F44336", "#FF9800"],
        borderWidth: 0,
        hoverBackgroundColor: ["#4CAF50", "#F44336", "#FF9800"],
        hoverBorderWidth: 0,
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    cutout: "85%",
  };
  const [arrow, setArrow] = useState("Show");

  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }

    if (arrow === "Show") {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  return (
    <div className={styles.vacation_statistics}>
      <div className={styles.chart_head}>
        <h3>Статистика</h3>
        <Tooltip
          placement='rightTop'
          title={"1 раб. месяц = 3 дня отпуска"}
          arrow={mergedArrow}>
          <img src={infoIcon} alt='#' />
        </Tooltip>
      </div>
      <div className={styles.chart_container}> 
        <div className={styles.chart_wrapper}>
          <Chart data={chartData} type='doughnut' options={options} />
        </div>
      </div>
      <div className={styles.chart_footer}>
        <div
          className={`${styles.footer_item} ${
            activeItem === 0 ? styles.active : styles.non_active
          }`}
          onClick={() => handleItemClick(0)}>
          <p>
            <img src={greenDot} />
            Доступно сейчас: дня
          </p>
          <span>32 дня</span>
        </div>
        <div
          className={`${styles.footer_item} ${
            activeItem === 1 ? styles.active : styles.non_active
          }`}
          onClick={() => handleItemClick(1)}>
          <p>
            <img src={yellowDot} /> Запланировано: дней
          </p>
          <span>8 дней</span>
        </div>
        <div
          className={`${styles.footer_item} ${
            activeItem === 2 ? styles.active : styles.non_active
          }`}
          onClick={() => handleItemClick(2)}>
          <p>
            <img src={redDot} /> Использовано/недоступно: дня
          </p>
          <span>4 дня</span>
        </div>
      </div>
    </div>
  );
};

export default VacationStatistics;
