import React from 'react'
import ProfileInfo from './components/ProfileInfo'
import GoToBack from '../../components/GoToBack'

const ProfilePage = () => {
  return (
    <>
    <GoToBack title='Вернуться к сотрудникам'/>
    <ProfileInfo/>
    </>
  )
}

export default ProfilePage