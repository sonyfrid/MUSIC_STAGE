import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { allEventThunk } from '../../../redux/actions/ALLEVENTAction';

function Lists2() {
  const event = useSelector((store) => store.allevent);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const delHandler = (id) => {
    // dispatch(delTrackThunk(id));
  };

  return (
    <ul
      className="list-group list-group-flush "
    >
      {event ? event?.filter((elem) => elem['Place.Owner.id'] === user.id).map((elem) => (
        <>
          <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
            <div className="avatar">
              <div className="w-10 me-1 rounded-full">
                <img src={`http://localhost:3030/eventPhoto/${elem.photo}`} alt="..." />
              </div>
            </div>
            <div className="ms-2 me-3">
              <div className="fw-bold">{elem.name}</div>
            </div>
            <div className="me-1 ">
              {elem['Type.name']}
            </div>
            <div className="ms-1">
              {elem.date }
            </div>

            <div className="me-3 ">
              <button
                type="button"
                className="btn bg-transparent rounded-0 text-reset border border-0 fw-lighter"
                name={elem.id}
                onClick={() => delHandler(elem.id)}
              >
                Удалить
              </button>
            </div>

            <hr />
          </li>

          <hr />
        </>
      ))
        : (
          <div />
        ) }
    </ul>
  );
}

export default Lists2;
