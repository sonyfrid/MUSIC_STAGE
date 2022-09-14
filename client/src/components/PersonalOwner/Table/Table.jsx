import { Tabs } from 'antd';
// import { Button, Drawer, } from 'antd';
import React, { useEffect, useState } from 'react';
// import { SearchOutlined } from '@ant-design/icons';
// import {
//   FileAddOutlined,
// } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Add from '../Add/Add';
import PlaceAdd from '../List/List';
import Lists2 from '../List/Event';
import Placelist from '../List/Place';
import Edit from '../Edit/Edit';
import RequesArt from '../List/RequestArt';
import { allTrackThunk } from '../../../redux/actions/allTrackAction';

const { TabPane } = Tabs;

function Tabses({ id_place }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allTrackThunk());
  }, []);

  return (
    <div
      className="me-3"
      style={{
        width: '130vh'
      }}
    >
      <Tabs defaultActiveKey="1" className="">
        <TabPane tab="Мои площадки" key="1">
          {/* <div className=" d-flex flex-row justify-content-around ">
            <Place id_place={id_place} />
          </div> */}

          <div className=" d-flex flex-row justify-content-around ">
            <div
              className="overflow-auto m-3"
              style={{
                height: '60vh',
                width: '100vh'
              }}
            >
              <Placelist />
            </div>
            <PlaceAdd id_place={id_place} />
          </div>

        </TabPane>
        <TabPane tab="Мои события" key="2">
          <div className=" d-flex flex-row justify-content-around ">
            <div
              className="overflow-auto m-3"
              style={{
                height: '60vh',
                width: '100vh'
              }}
            >
              <Lists2 />
            </div>
            <Add />
          </div>
        </TabPane>
        <TabPane tab="Входящие заявки" key="3">
          <RequesArt />
        </TabPane>
        <TabPane
          tab="Редактировать"
          key="4"
        >
          <Edit />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Tabses;
