import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { allTrackThunk } from '../../redux/actions/allTrackAction';

function Lists2({ id }) {
  const dispatch = useDispatch();
  const Alltrack = useSelector((store) => store.alltrack);
  // const user = useSelector((store) => store.user);
  // console.log('++++', Alltrack);

  useEffect(() => {
    dispatch(allTrackThunk());
  }, []);

  return (
    <ul className="list-group list-group-flush ">
      {Alltrack?.filter((elem) => elem.artist_id === id)?.map((elem) => (
        <>
          <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent mx-2">
            <div className="ms-2 me-auto flex-grow-1">
              <div className=" fs-6">{elem.track}</div>
            </div>
            <div className="me-auto ">
              <audio controls className="p-3 bg-transparent">
                <track
                  default
                  kind="captions"
                  srcLang="en"
                  src="/media/examples/friday.vtt"
                />
                <source src={`http://localhost:3030/music/${elem.track}`} type="audio/mpeg" />
              </audio>
            </div>
            <hr />
          </li>
          <hr />
        </>
      ))}
    </ul>
  );
}

export default Lists2;
