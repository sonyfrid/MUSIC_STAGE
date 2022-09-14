/* eslint-disable react/button-has-type */
import React from 'react';
import styles from '../ui.module.css';

export default function Button({
  body, value, type, funcOnClick, styleBtn
}) {
  return (
    <div className={styles.divbtn} style={styleBtn}>
      <button
        className={styles.button}
        onClick={funcOnClick}
        value={value}
        type={type}
      >
        {body}
      </button>
    </div>
  );
}
