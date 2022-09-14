import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.min.css';
import { addArtThunk } from '../../redux/actions/allArtistsAction';

function Lists({ eventId }) {
  console.log('----', eventId);
  const event = useSelector((store) => store.event);
  console.log('-858585', event);
  const art = useSelector((store) => store.art);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addArtThunk());
  }, []);

  return (
    <ul className="list-group list-group-flush ">
      {event.filter((elem) => elem.event_id === eventId).map((el) => (
        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
          <div className="avatar ">
            <div className="d-flex flex-row w-10 me-1 rounded-full ">
              <img src={`http://localhost:3030/photo/${el['Artist.photo']}`} alt="..." />
            </div>
          </div>
          <div className="d-flex ms-2 justify-content-center align-items-center fs-6 fw-semibold">
            {el['Artist.name']}
          </div>
          <div className="d-flex ms-2 justify-content-center align-items-center fw-light">
            {el['Artist.genre']}
          </div>
          <hr />
        </li>
      ))}
      <hr />
    </ul>
  );
}

export default Lists;
