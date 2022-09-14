import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabses from './TableModal';
import { addModalThunk } from '../../redux/actions/oneArtistAction';

export default function PersonalPage({ oneEvent }) {
  const event = useSelector((store) => store.event);

  console.log('000', oneEvent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addModalThunk());
  }, []);
  useEffect(() => {
  }, [oneEvent]);
  return (
    <div style={{
      backgroundColor: `rgb(${230}, ${230}, ${230})`,
    }}
    >
      <div className="d-flex flex-column  w-100 h-100 d-inline-block">

        <div className="d-flex p-3  d-inline-block flex-row  justify-content-between">

          <div className="p-2 flex  flex-column fs-1 fw-normal fw-bold">
            {oneEvent.name}
            <div className="p-2 flex-fill fs-6 ">{oneEvent.Place.location}</div>

            <div className=" fst-italic fw-light fs-5 ">
              {oneEvent.Type.name}
            </div>
          </div>

          <div className="avatar" style={{ width: '100px' }}>
            <img src="././black2logo.png" alt="logo" />
          </div>
        </div>

        <div className="w-50 h4   border-bottom border-danger" />
        <div className="d-flex justify-content-between">
          <div className="d-flex w-50 flex-column justify-content-between px-5">
            <div className="d-flex m-1" />
            <div className="d-flex text-center lh-lg mb-2">{oneEvent.info}</div>
            <div className="d-flex " />
          </div>
          <div className="w-50 d-flex flex-column p-3">
            <Tabses eventId={oneEvent.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
