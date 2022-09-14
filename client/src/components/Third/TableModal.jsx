import { Tabs } from 'antd';
import React, { useState } from 'react';
import ListModal from './ListModal';
import Track from './Track';

const { TabPane } = Tabs;

function Tabses({ id }) {
  const onChange = (key) => {
  };

  return (
    <Tabs defaultActiveKey="1" onChange={onChange} className="overflow-auto">
      <TabPane tab="Заявки" key="1">
        <ListModal id={id} />
      </TabPane>
      <TabPane tab="Треки" key="2">
        <Track id={id} />
      </TabPane>
    </Tabs>
  );
}

export default Tabses;
