import React from "react";
import s from './Greetings.module.css';


const Greetings = () => {
    
    return (
        <div className={s.greet}>
        <div>
        Добро пожаловать в резюме
        </div>
        <div>
        Ломатченко Максима Сергеевича
        </div>
        </div>
    )
}


export default Greetings;