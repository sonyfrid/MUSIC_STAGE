/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './First.module.css';
import Button from '../ui/Button/Button';
import FormAuth from '../ui/FormAuth/FormAuth';
import FormReg from '../ui/FormReg/FormReg';
import Navi from '../ui/Navi/Navi';

export default function First() {
  // useState для перерендера формы
  const [form, setForm] = useState('main');

  const user = useSelector((state) => state.user);

  return (
    <div id="first" className={styles.headdiv}>
      <Navi />
      <div className={styles.imegediv}> </div>
      <div className={styles.formdiv}>
        <div className={styles.formdivlogo}> </div>
        <hr className={styles.hrline} />

        {/* MAIN */}
        {form === 'main' && (
          <div className={styles.formdivbody}>
            <p className="text-center fs-3 lh-base text-uppercase fw-lighter fw-semibold lh-sm ">
              Платформа
              {' '}
              <br />
              для музыкантов и
              {' '}
              <br />
              организаторов
              {' '}
              <br />
              мероприятий
            </p>
            {!user && (
              <div className="">
                <Button funcOnClick={() => setForm('authartist')} type="button" body="МУЗЫКАНТ" />
                <Button funcOnClick={() => setForm('authowner')} type="button" body="ОРГАНИЗАТОР" />
              </div>
            )}
            <div className="mb-5">
              <p className="text-center fs-4 fw-light lh-sm ">листай вниз, чтобы увидеть афишу</p>
            </div>
          </div>
        )}

        {/* REG */}
        {(form === 'artist' || form === 'owner') && (
          <div className={`${styles.formdivbody} ${styles.formdivform}`}>
            <p>
              <a href="#" onClick={() => setForm('main')}>Назад</a>
              |
              <a href="#" onClick={() => setForm(form)}>Регистрация</a>
              |
              <a href="#" onClick={() => setForm(`auth${form}`)}>Вход</a>
            </p>
            <h3>Регистрация</h3>
            <FormReg typeUser={form} />
          </div>
        )}

        {/* AUTH */}
        {(form === 'authartist' || form === 'authowner') && (
          <div className={`${styles.formdivbody} ${styles.formdivform}`}>
            <p>
              <a href="#" onClick={() => setForm('main')}>Назад</a>
              |
              <a href="#" onClick={() => setForm(form.slice(4))}>Регистрация</a>
              |
              <a href="#" onClick={() => setForm(form)}>Вход</a>
            </p>
            <h3>Вход</h3>
            <FormAuth typeUser={form} />
          </div>
        )}
      </div>
    </div>
  );
}
