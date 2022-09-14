/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Modal, Tooltip } from 'antd';
import { addEventThunk } from '../../redux/actions/allEventsAction';
import { addEventStatusThunk } from '../../redux/actions/eventStatusAction';
import styles from './Second.module.css';
import 'react-toastify/dist/ReactToastify.css';
import ModalPage from './ModalPage';
import ModalMessage from '../ui/ModalMessage/ModalMessage';

export default function Card({ el, oneEvent, photo }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addEventThunk());
  }, []);
  const user = useSelector((store) => store.user);
  const notify = () => toast('Вы уже отправили заявку на участие. Отменить заявку можно в личном кабинете.');

  const [visible, setVisible] = useState(false);

  const clickHandler = () => {
    setVisible(true);
  };

  return (
    <div
      className=" d-flex flex-column  align-items-center mb-3"

    >
      <div key={oneEvent.id} id="simple-list-item-1" className=" col-8 d-flex justify-content-center align-items-center rounded-0 " style={{ height: '280px' }}>
        <div className="card text-bg-dark d-flex h-100 w-100 rounded-bottom  d-flex align-content-center" onClick={clickHandler}>

          <div className="card-title fs-1  d-flex justify-content-center  mt-5 fs-1 text-white ">
            {oneEvent.name}
          </div>

          <img src={`http://localhost:3030/eventPhoto/${oneEvent.photo}`} className="d-flex  card-img opacity-50 position-absolute" alt="..." />

          <p className="fs-1 fw-light text-white fst-italic ms-4 ">{oneEvent.date}</p>

          <div className="d-flex justify-content-center align-items-center">
            <Modal
              centered
              destroyOnClose
              visible={visible}
              footer={null}
              onCancel={() => setVisible(false)}
              width={1200}
            >
              <ModalPage oneEvent={oneEvent} />
            </Modal>
          </div>

        </div>
        <Tooltip />
      </div>
      <div className=" ">
        {user?.type === 'artist' && (
          <ModalMessage el={oneEvent} />
        )}
      </div>
    </div>
  );
}
