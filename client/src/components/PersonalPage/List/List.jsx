import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';

function Lists({ info }) {
  console.log('0000', info);
  return (
    <ul className="list-group list-group-flush ">
      {info?.map((el) => (
        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
          <div className="avatar">
            <div className="w-10 me-4 rounded-full">
              <img src={`http://localhost:3030/eventPhoto/${el['Event.photo']}`} alt="..." />
            </div>
          </div>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{el['Event.Place.name']}</div>
            {el['Event.Place.location']}
          </div>
          <div className="me-auto">
            <div className="">
              {el['Event.name']}
            </div>
          </div>
          <div className="me-auto">
            <div className="">
              {(String(el.status) === 'null') && <img src="././png/003-loading.png" style={{ width: '20px' }} alt="..." />}
              {' '}
              {(String(el.status) === 'false') && <img src="././png/002-cancel.png" style={{ width: '20px' }} alt="..." />}
              {(String(el.status) === 'true') && <img src="././png/001-check.png" style={{ width: '20px' }} alt="..." />}
            </div>
          </div>
          <div className="me-auto">
            <div className="">{el['Event.date']}</div>
            {/* <div className=""><p>28.08.2022</p></div> */}
          </div>
          <hr />
        </li>
      )) }

    </ul>
  );
}

export default Lists;
