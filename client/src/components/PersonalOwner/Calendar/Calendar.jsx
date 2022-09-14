import React from 'react';
import { DatePicker, Space } from 'antd';

const onChange = (date, dateString) => {
  // console.log(dateString);
};
export default function Cal() {
  return (
    <DatePicker onChange={onChange} />

  );
}
