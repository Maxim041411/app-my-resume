import React from 'react';
import h from './Header.module.css';
import logo from './logo512.png'

const Header = () => {
  return (
    <header className={h.header}>
      <div className={h.logo}>
        <img src={logo} className={h.anim} alt='логотип'/>
      </div>
      <div className={h.cont}>
        Резюме
      </div>
    </header>
  )
}

export default Header;


