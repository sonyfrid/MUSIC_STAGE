import React from 'react';
import styles from '../ui.module.css';

export default function Input({
  type, name, placeholder, onChange
}) {
  return (
    <div className={styles.divinput}>
      <label htmlFor={name}>{placeholder}</label>
      <input className={styles.input} aria-required="true" onChange={onChange} type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
}
