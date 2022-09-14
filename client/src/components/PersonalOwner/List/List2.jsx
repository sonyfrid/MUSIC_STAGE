import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTrackThunk, allTrackThunk } from '../../../redux/actions/getTrack';

function Lists2() {
  const dispatch = useDispatch();

  const Alltrack = useSelector((store) => store.track);
  const user = useSelector((store) => store.user);
  const track = Alltrack.filter((elem) => elem.artist_id === user.id);
  useEffect(() => {
    dispatch(allTrackThunk());
  }, []);

  return (
    <ul className="list-group list-group-flush ">
      {track?.map((elem) => (
        <>
          <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent mx-2">
            <div className="avatar">
              <div className="w-10 me-4 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt="..." />
              </div>
            </div>
            <div className="ms-2 me-auto flex-grow-1">
              <div className="fw-bold">{elem.track}</div>
              его описание
            </div>
            <div className="me-auto ">
              <audio
                controls
                src="../../../../../../server/public/music/SLAVA - Kapushon.mp3"
              >
                <track
                  default
                  kind="captions"
                  srcLang="en"
                  src="/media/examples/friday.vtt"
                />
                Sorry, your browser doesnt support embedded videos.
              </audio>
            </div>
            <div className="me-auto ">
              <div className="">Дата</div>
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
