import { Tabs } from 'antd';
import { Button, Drawer, } from 'antd';
import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import {
  FileAddOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Add from '../Add/Add';
import Lists from '../List/List';
import Lists2 from '../List/List2';
import Edit from '../Edit/Edit';
import { allTrackThunk } from '../../../redux/actions/allTrackAction';

const { TabPane } = Tabs;

function Tabses({ info }) {
  // const [visible, setVisible] = useState(false);

  // const showDrawer = () => {
  //   setVisible(true);
  // };

  // const onClose = () => {
  //   setVisible(false);
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allTrackThunk());
  }, []);

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Заявки" key="1">
        <div
          className="overflow-auto"
          style={{
            height: '55vh'
          }}
        >
          <Lists info={info} />
        </div>
      </TabPane>
      <TabPane tab="Треки" key="2">
        <Add />
        <div
          className="overflow-auto"
          style={{
            height: '50vh'
          }}
        >
          <Lists2 />
        </div>
      </TabPane>
      <TabPane
        tab="Редактировать"
        key="4"
      >
        <Edit />
      </TabPane>
    </Tabs>
  );
}

export default Tabses;
