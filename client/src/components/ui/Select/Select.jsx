import React from 'react';
import styles from '../ui.module.css';

export default function Select({
  options, name, placeholder, onChange
}) {
  return (
    <div className={styles.divinput}>
      <label htmlFor={name}>{placeholder}</label>
      <select className={styles.select} aria-required="true" onChange={onChange} defaultValue="Выбрать" name={name} id={name}>
        <option disabled value="Выбрать">Выбрать</option>
        {options.map((el, index) => <option key={index} value={el.value}>{el.body}</option>)}
      </select>
    </div>
  );
}
