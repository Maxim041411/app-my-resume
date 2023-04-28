import React from "react";
import s from "./Download.module.css";
import qr1 from "../../public/qr1.png";
import qr2 from "../../public/qr1.png";



const Download = (props) => {
        return  ( 
        <div>
            <div className={s.item}>
                <a href="https://disk.yandex.ru/i/vAGhFaRH2rivpQ" target='_blank'>
                    Для того, чтобы скачать резюме в формате ".doc" нажмите здесь
                </a>
            </div>
            <div className={s.down}>
                или отсканируйте QR-код
            </div>
            <div className={s.down}>
            <img src={qr1} alt="QR-код" />
            </div>
            <div className={s.item}>    
            <a href='https://disk.yandex.ru/i/9mD5VqLwXb_V_A' target='_blank'>
                Для того, чтобы скачать резюме в формате ".pdf" нажмите здесь
            </a>
            </div>
            <div className={s.down2}>
                или отсканируйте QR-код
            </div>
            <div className={s.down3}>
                <img src={qr2} alt="QR-код" />
            </div>
        </div>

    )
}

export default Download;















 

