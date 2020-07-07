import React from 'react';
import css from './app.module.css';

export default function Inputs({value, changeButtonDisplay}) {

    function onChangeButton (event) {
        changeButtonDisplay(event.target.value);
    };

    return (
        <span>
            <div className={css.test1}>
                <input type="number" value={value} onChange={onChangeButton}></input>
            </div>            
        </span>
    );
}
