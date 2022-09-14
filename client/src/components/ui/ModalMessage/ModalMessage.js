/* eslint-disable quotes */
import { Modal } from 'antd';
import 'antd/dist/antd.min.css';
import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import { useSelector } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import ModalMesPage from './ModalMesPage';

function ModalMessage({ el }) {
  const [visible, setVisible] = useState(false);
  console.log('🚀 ~  ~ el', el);

  return (
    <>
      <Tooltip>
        <button
          type="button"
          onClick={() => setVisible(true)}
          className=" rounded-top btn btn-outline-secondary "
          style={{
            width: '940px',
          }}
        >
          Хочу выступать

        </button>
      </Tooltip>
      <Modal
        centered
        visible={visible}
        footer={null}
        onCancel={() => setVisible(false)}
        width={600}
      >
        <ModalMesPage setVisible={setVisible} el={el} />
      </Modal>
    </>
  );
}

export default ModalMessage;
