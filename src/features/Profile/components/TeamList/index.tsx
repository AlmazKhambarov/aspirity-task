import React, { FC } from 'react'
import styles from "./TeamList.module.css"
import { UsersList } from '../../../../mockdata'
import ComponentHeader from '../../../../components/ComponentHeader'
import { IModal } from '../../interface';


const TeamList:FC<IModal> = ({open, setOpen}) => {
  return (
    <div className={styles.team}>
        <ComponentHeader title='Команда' label='' open={open} setOpen={setOpen}/>
        <div className={styles.list}>
            {UsersList.map((el, idx)=>(
                <div className={styles.card}>
                    <div className={styles.card_img}>
                        <img src={el.img} alt="" />
                    </div>
                    <div className={styles.card_info}>
                        <h3>{el.name}</h3>
                        <p>{el.job}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TeamList