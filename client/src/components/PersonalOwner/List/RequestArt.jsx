/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import { patchEventStatusThunk } from '../../../redux/actions/eventStatusAction';
import { addEventThunk } from '../../../redux/actions/allEventsAction';
import 'antd/dist/antd.min.css';
import ModalPage from '../ModalPage';

function ReqArt() {
  const dispatch = useDispatch();

  const event = useSelector((store) => store.event);
  const user = useSelector((store) => store.user);

  const artEvent = event?.filter((elem) => elem['Event.Place.Owner.id'] === user.id);
  // console.log('!!!!!', artEvent[0].status);

  const patchStatus = ({ event_id, status, artist_id }) => {
    dispatch(patchEventStatusThunk({ event_id, artist_id, status }));
  };

  const [visible, setVisible] = useState(false);

  const clickHandler = () => {
    setVisible(true);
  };

  return (
    <ul className="list-group list-group-flush ">
      <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent ms-5">
        <div className="ms-3 me-auto">
          <div className="">
            <p> Группа:</p>
          </div>
        </div>
        <div className="ms-4 me-auto">
          <div className="">
            <p> Мероприятие:</p>
          </div>
        </div>
        <div className="ms-5 me-auto">
          <div className="">
            <p> Жанр:</p>
          </div>
        </div>
        <div className="ms-5 me-auto">
          <div className="">
            <p> Сообщение:</p>
          </div>
        </div>
        <div className="me-auto ms-3">
          <div className="">
            <p> Статус заявки:</p>
          </div>
        </div>

        <hr />
      </li>
      {artEvent.map((el) => (
        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
          <div className="avatar" onClick={clickHandler}>
            <div className="w-10 me-4 rounded-full">
              <img src={`http://localhost:3030/photo/${el['Artist.photo']}`} alt="..." />
            </div>
          </div>
          <div className="ms-3 me-5">
            <div className="fw-bold">{el['Artist.name']}</div>
          </div>
          <div className="ms-2" style={{ width: '160px' }}>
            {el['Event.name']}
          </div>
          <div className=" ms-2">
            <div className="fw-bold">{el['Artist.genre']}</div>
          </div>
          <div className="ms-5 me-4">
            <div className="" style={{ width: '100px' }}>
              &quot;
              {el.message}
              &quot;
            </div>
          </div>
          <div className="me-5 ms-4">
            {String(el?.status) === 'null' && (
              <>
                <button onClick={() => patchStatus({ event_id: el.event_id, artist_id: el.artist_id, status: true })}>Принять</button>
                <br />
                <button onClick={() => patchStatus({ event_id: el.event_id, artist_id: el.artist_id, status: false })}>Отклонить</button>
              </>
            )}
            {String(el?.status) === 'true' && (
              <img src="././png/001-check.png" style={{ width: '20px' }} alt="logo" />
            )}
            {String(el?.status) === 'false' && (
              <img src="././png/002-cancel.png" style={{ width: '20px' }} alt="logo" />
            )}
          </div>
          <hr />

          <div className=" d-flex flex-column justify-content-end">
            <Modal
              centered
              destroyOnClose
              visible={visible}
              footer={null}
              onCancel={() => setVisible(false)}
              width={1100}
            >
              <ModalPage id={el['Artist.id']} visible={visible} />
            </Modal>

          </div>

        </li>
      ))}

      <hr />
    </ul>
  );
}

export default ReqArt;
