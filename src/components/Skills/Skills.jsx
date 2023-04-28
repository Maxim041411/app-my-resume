import React from "react";
import s from "./Skills.module.css"

const Skills = (props) => {
    return (
        <div className={s.sk}>
        <div className={s.sk1}>
            <ul>
            <p><li>HTML 5.3</li></p>
            <p><li>CSS 3</li></p>
            <p><li>Node.js 18.16.0</li></p>
            <p><li>React.js</li></p>
            <p><li>Python (начальный уровень)</li></p>
            <p><li>Git</li></p>
            <p><li>Chrome DevTools</li></p>
            </ul>
            </div>
        </div>
    )
}

export default Skills;
