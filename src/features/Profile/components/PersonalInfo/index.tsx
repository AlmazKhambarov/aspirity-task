import React, { FC, useState } from "react";
import styles from "./PersonalInfo.module.css";
import { Button, Form } from "antd";
import { Input } from "../../../../ui/Input";
import ComponentHeader from "../../../../components/ComponentHeader";

interface Iprops {
  disabled:boolean;
  open: boolean;
  setOpen: React.ReactNode | any;
}
const PersonalInfo:FC<Iprops> = ({disabled, setOpen, open}) => {
  const initialValues = {
    name: "Юрий",
    surname: "Гершы",
    patronymic: "Андреевич",
    birthdate: "06.01.2014",
    hireDate: "15.05.2020",
    country: "Россия",
    city: "Красноярск",
    position: "UI/UX designer",
    email: "test@gmail.com",
  };
  return (
    <div className={styles.inner}>
      <div className={styles.personal_info}>
        <ComponentHeader title="Персональная информация" label="Изменить" setOpen={setOpen} open={open}/>
        <Form
          layout='vertical'
          className={styles.form}
          initialValues={initialValues}>
          <div className={styles.form_inner}>
            <div className={styles.form_label}>
              <span className={styles.label}>имя</span>
            </div>
            <Input disabled={disabled} name="name"/>
          </div>

          <div className={styles.form_inner}>
            <div className={styles.form_label}>
              <span className={styles.label}>фамилия</span>
            </div>
            <Input disabled={disabled} name="surname"/>
          </div>
          <div className={styles.form_full}>
            <div className={styles.form_label}>
              <span className={styles.label}>отчество</span>
            </div>
            <Input disabled={disabled} name="patronymic"/>
          </div>
          <div className={styles.form_inner}>
            <div className={styles.form_label}>
              <span className={styles.label}>дата рождения</span>
            </div>
            <Input disabled={disabled} name="birthdate"/>
          </div>
          <div className={styles.form_inner}>
            <div className={styles.form_label}>
              <span className={styles.label}>дата трудоустройства</span>
            </div>
            <Input disabled={disabled} name="hireDate"/>
          </div>
          <div className={styles.form_inner}>
            <div className={styles.form_label}>
              <span className={styles.label}>страна</span>
            </div>
            <Input disabled={disabled} name="country"/>
          </div>
          <div className={styles.form_inner}>
            <div className={styles.form_label}>
              <span className={styles.label}>город</span>
            </div>
            <Input disabled={disabled} name="city"/>
          </div>
          <div className={styles.form_inner}>
            <div className={styles.form_label}>
              <span className={styles.label}>должность</span>
            </div>
            <Input disabled={disabled} name="position"/>
          </div>
          <div className={styles.form_inner}>
            <div className={styles.form_label}>
              <span className={styles.label}>электронная почта</span>
            </div>
            <Input disabled={disabled} name="email"/>
          </div>
          {open? <Button className={styles.submit_btn}>СОХРАНИТЬ</Button>:null}
        </Form>
      </div>
    </div>
  );
};

export default PersonalInfo;
