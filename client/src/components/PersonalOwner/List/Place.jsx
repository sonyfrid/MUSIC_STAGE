import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { delPlaceThunk } from '../../../redux/actions/allPlaceAction';
import { addPlaceThunk } from '../../../redux/actions/AllPlaces';

function Lists({ id_place }) {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const dispatch = useDispatch();

  const [input, setInput] = useState({});
  const [file, setFile] = useState({});

  const fileHandler = (e) => {
    setFile((prev) => (e.target.files[0]));
  };
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: (e.target.value) }));
  };

  const places = useSelector((store) => store.place);
  const user = useSelector((store) => store.user);

  const DelHandler = () => {
    dispatch(delPlaceThunk(id_place));
  };

  return (
    <ul className="list-group list-group-flush ">
      {places ? places?.filter((elem) => elem.owner_id === user.id).map((elem) => (
        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent">
          <div className="avatar ">
            <div className="w-10 me-4 rounded-full">
              <img src={(places) ? `http://localhost:3030/photoOwner/${elem.photo}` : <Spin indicator={antIcon} />} alt="Avatar" />
            </div>
          </div>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{elem.name}</div>
          </div>
          <div className="me-5">
            <div className="">
              {elem.location}
            </div>
          </div>
          <div className="me-auto ">
            <button
              type="submit"
              className="btn bg-transparent rounded-0 text-reset border border-0 fw-lighter"
              onClick={DelHandler}
            >
              Удалить
            </button>
          </div>

          <hr />
        </li>
      ))
        : (
          <div />
        ) }

      <hr />
    </ul>
  );
}

export default Lists;
