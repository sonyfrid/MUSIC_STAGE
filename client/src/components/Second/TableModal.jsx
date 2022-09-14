import { Tabs } from 'antd';
import React from 'react';
import ListModal from './ListModal';

const { TabPane } = Tabs;

function Tabses({ eventId }) {
  const onChange = (key) => {
  };

  return (
    <Tabs defaultActiveKey="1" onChange={onChange} className="overflow-auto">
      <TabPane tab="Список артистов" key="1">
        <div className="d-flex flex-row justify-content-start" />
        <ListModal eventId={eventId} />
      </TabPane>
    </Tabs>
  );
}

export default Tabses;
