import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { delTrackThunk } from '../../../redux/actions/getTrack';
import { allTrackThunk, getTrackThunk } from '../../../redux/actions/allTrackAction';

function Lists2() {
  const dispatch = useDispatch();
  const Alltrack = useSelector((store) => store.alltrack);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(allTrackThunk());
    dispatch(getTrackThunk());
  }, []);

  const delHandler = (id) => {
    dispatch(delTrackThunk(id));
  };
  return (
    <ul className="list-group list-group-flush ">
      {Alltrack?.filter((elem) => elem.artist_id === user.id).map((elem) => (
        <>
          <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent mx-2">
            <div className="ms-2 me-auto flex-grow-1">
              <div className="fst-italic fs-6">{elem.track}</div>
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
            <div className="me-auto ">
              <button
                type="button"
                className="btn bg-transparent rounded-0 text-reset"
                // name={elem.id}
                onClick={() => delHandler(elem.id)}
              >
                Удалить
              </button>
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
