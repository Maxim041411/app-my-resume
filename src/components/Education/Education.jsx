import React from "react";
import s from './Education.module.css';


const Education = (props) => {
    return (
        <div className={s.ed}>
        <div>
        <p><b>Образование:</b> Высшее</p>
        <p><b>Вуз:</b> Филиал Российской таможенной академии г. Ростов-на-Дону</p>
        <p><b>Год окончания:</b> 2013</p>
        <p><b>Факультет:</b> Юридический</p>
        <p><b>Специальность:</b> Юриспруденция</p>
        <p><b>Квалификация:</b> Юрист</p>
            </div>
            </div>
    )
}

export default Education;