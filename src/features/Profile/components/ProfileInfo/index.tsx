import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import { UserAvatar } from "../../../../assets/images";
import { Tabs, TabsProps } from "antd";
import BasicInfo from "../BasicInfo";
import Vacation from "../Vacation";
const ProfileInfo = () => {
  
  const [activeKey, setActiveKey] = useState("1");
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Основная информация",
      children: <BasicInfo />,
    },
    {
      key: "2",
      label: "Отпуск",
      children: <Vacation/>,
    },
  ];
  const renderActiveTabContent = () => {
    const activeTab = items.find((item) => item.key === activeKey);
    return activeTab ? activeTab.children : null;
  };
  const onChange = (key: string) => {
    setActiveKey(key);
  };
  return (
    <div >
      <div className={styles.profile}>
        <div className={styles.profile_basic}>
          <div className={styles.profile_img}>
            <img src={UserAvatar} alt='#' />
          </div>
          <div className={styles.bio}>
            <h3 className={styles.profile_name}>Иванов</h3>
            <h3 className={styles.profile_lastname}>Иван Иванович</h3>{" "}
            <p className={styles.bio_info}>
              <span className={styles.profile_job}>UI/UX designer</span>
              <span className={styles.profile_address}>Россия, Красноярск</span>
            </p>
          </div>
        </div>
        <div className={styles.tab_menu}>
          <Tabs
            defaultActiveKey='1'
            onChange={onChange}
            items={items}
            className={styles.tabs}
          />
        </div>
      </div>
      <div>{renderActiveTabContent()}</div>
    </div>
  );
};

export default ProfileInfo;
