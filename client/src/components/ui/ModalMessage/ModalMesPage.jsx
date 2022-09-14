/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider } from 'antd';
import { useState } from 'react';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import { addEventStatusThunk } from '../../../redux/actions/eventStatusAction';

export default function ModalMesPage({ setVisible, el }) {
  console.log('🚀 ~ file: ModalMesPage.jsx ~ line 11 ~ ModalMesPage ~ el', el);
  const event = useSelector((store) => store.event);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const user = useSelector((store) => store.user);

  const changeHandler = (e) => {
    setInput(() => (e.target.value));
  };

  const submitHandler = ({ event_id }) => {
    console.log('🚀 ~ file: ModalMesPage.jsx ~ line 22 ~ submitHandler ~ input', user.id);
    dispatch(addEventStatusThunk({ event_id, artist_id: user.id, message: input }));
    setVisible((false));
  };

  return (
    <div
      style={{
        backgroundColor: `rgb(${230}, ${230}, ${230})`,
      }}
      l
    >
      <div className="d-flex flex-column mb-1 w-75 h-100 d-inline-block">
        <div className="d-flex p-1 h-20 flex-row justify-content-between">
          <div className="p-2 ms-5 flex align-items-center  ms-4 fs-4 fw-lighter">Отправить заявку на участие</div>
          {/* <div className="avatar ">
            <img style={{ width: '10rem', height: '15rem' }} src="././black2logo.png" alt="logo" />
          </div> */}
        </div>
        <div className="w-50  pb-1 mb-1 border-bottom border-danger" />
        <div className="d-flex w-50 mt-3 mb-3 flex-column justify-content-center px-5">
          <Textarea style={{ width: '20rem', height: '7rem' }} onChange={changeHandler} name="message" placeholder="" />
          <Button styleBtn={{ width: '40rem', }} funcOnClick={() => submitHandler({ event_id: el.id })} type="button" body="ОТПРАВИТЬ" />
        </div>
      </div>
    </div>
  );
}
