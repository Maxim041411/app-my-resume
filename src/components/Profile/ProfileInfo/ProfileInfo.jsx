import React from 'react';
import m from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    
  return (
    <div className={m.p}>
     <p><b>ФИО:</b> Ломатченко Максим Сергеевич</p>

<p><b>Дата рождения:</b> 4 сентября 1990 года</p>

<p><b>Возраст:</b> 32 года</p>

<p><b>Способы связи:</b> +7 (938) 1079679, alternative041@mail.ru</p>

<p><b>Гражданство:</b> Россия</p>

<p><b>Проживает:</b> г. Ростов-на-Дону</p>

<p>Не готов к переезду, готов к командировкам</p>
            </div>
      )

}

export default ProfileInfo;