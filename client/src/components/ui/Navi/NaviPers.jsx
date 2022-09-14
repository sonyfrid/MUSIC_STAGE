import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Navi.module.css';

export default function Navi() {
  return (
    <>
      <div
        className={`${styles.divavatar} avatar`}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <div className="avatar" style={{ heigth: '30px' }}>
          <img src="././black2logo.png" alt="logo" />
        </div>
      </div>

      <div
        className={`${styles.divcanvas} offcanvas offcanvas-end `}
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        {/* <div style={{ justifyContent: 'center' }} className="offcanvas-header">
          <h5 className="offcanvas-title fw-lighter fs-2 fst-italic"
          id="offcanvasWithBothOptionsLabel ">Меню </h5>
        </div> */}
        <div className="offcanvas-body fw-lighter fs-2 text-center  d-flex flex-column justify-content-center ">
          <Link to="/">Главная</Link>
          <p> </p>
          <Link to="/logout">Выйти</Link>
        </div>

      </div>
    </>
  );
}
