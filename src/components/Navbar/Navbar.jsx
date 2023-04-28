import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const setActive = ({isActive}) => isActive ? s.active : '';

const Navbar = () => {
    return <div className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' className={setActive}>О себе</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/education' className={setActive}>Образование</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/experience' className={setActive}>Опыт работы</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='skills' className={setActive}>Навыки</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='download' className={setActive}>Скачать резюме</NavLink>
        </div>
        </div>
}

export default Navbar;