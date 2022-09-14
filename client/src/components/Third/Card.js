import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'antd';
import 'antd/dist/antd.min.css';
import ModalPage from './ModalPage';

export default function OneCard({
  input, id, name, genre, photo
}) {
  const art = useSelector((store) => store.art);
  const find = useSelector((store) => store.find);

  const [visible, setVisible] = useState(false);

  const clickHandler = () => {
    setVisible(true);
  };

  return (
    <div className=" d-flex flex-row mt-3 ms-5" style={{ height: '80px' }} onClick={clickHandler}>
      <div className="avatar ">
        <div>
          <img src={`http://localhost:3030/photo/${photo}`} className=" rounded-full " alt="..." />
        </div>
      </div>
      <div className="d-flex flex-column ms-4 justify-content-center">
        <h5 className="fw-bolder text-black fs-3">{name}</h5>
        <p className=" text-black fs-5">{genre}</p>
      </div>
      <div className=" d-flex flex-column justify-content-end">
        <Modal
          centered
          destroyOnClose
          visible={visible}
          footer={null}
          onCancel={() => setVisible(false)}
          width={1100}
        >
          <ModalPage id={id} visible={visible} />
        </Modal>

      </div>
    </div>

  );
}
