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

  console.log('999', places);

  const addTrack = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id', user.id);
    formData.append('name', input.name);
    formData.append('location', input.location);
    formData.append('info', input.info);
    dispatch(addPlaceThunk(formData));
    setFile({});
  };
  // console.log(id_place);

  // const DelHandler = () => {
  //   dispatch(delPlaceThunk(id_place));
  // };

  return (
    // <ul className="list-group list-group-flush ">
    <div
      className=" ms-5"
      style={{
        height: '60vh',
      }}
    >
      <form onSubmit={addTrack} encType="multipart/form-data">

        <div
          className="d-flex flex-column  align-items-end "
          style={{
            width: '35vh'
          }}
        >
          <input value={input.name} name="name" onChange={inputHandler} type="text" className="form-control text-center rounded-0" placeholder="Название" />
          <input value={input.location} name="location" onChange={inputHandler} type="text" className="form-control text-center rounded-0" placeholder="Адрес" />
          <input value={input.info} name="info" onChange={inputHandler} type="text" className="form-control text-center rounded-0" placeholder="Описание" />

          {/* <div className="d-flex align-items-center w-50 mb-1"> */}
          <input
            value={input.file}
            name="file"
            onChange={fileHandler}
            className="
              form-control bg-transparent rounded-0 text-center"
            type="file"
          />
          {/* </div> */}

          <button
            className="btn bg-transparent rounded-0 text-reset"
            type="submit"
            style={{
              width: '35vh'
            }}
            id="inputGroupFileAddon04"
          >
            Добавить

          </button>

        </div>
      </form>
      <hr />

    </div>

  );
}

export default Lists;
