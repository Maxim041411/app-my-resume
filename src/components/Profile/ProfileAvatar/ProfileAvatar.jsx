import React from 'react';
import s from './ProfileAvatar.module.css';
import ava from '../../../public/profile-ava.jpg';


const ProfileAvatar = () => {
  return (
    <div>
    <div>      
        <img src={ava} alt='аватар' className={s.descriptionBlock}/>
      </div>
       </div>
  )
}

export default ProfileAvatar;