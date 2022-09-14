import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Maps from './Maps/Maps';
import Navi from '../ui/Navi/Navi';

export default function Fourth() {
  return (
    <div
      id="fourth"
      style={{
        backgroundColor: `rgb(${38}, ${41}, ${29})`,
        width: '100vw',
        height: '100vh'
      }}
    >
      <Navi typeLogo="white" />
      <Maps />
    </div>
  );
}
