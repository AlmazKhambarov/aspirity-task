import React, { useState } from 'react'
import styles from "./BasicInfo.module.css"
import PersonalInfo from '../PersonalInfo'
import EmployyeeLoad from '../EmployeeLoadCard'
import CustomModal from '../../../../components/Modal'

const BasicInfo = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.basic}>
        <PersonalInfo disabled={true} open={open} setOpen={setOpen}/>
        <EmployyeeLoad/>
        <CustomModal open={open} setOpen={setOpen}>
        <PersonalInfo disabled={false} open={open} setOpen={setOpen}/>
        </CustomModal>
    </div>
  )
}

export default BasicInfo