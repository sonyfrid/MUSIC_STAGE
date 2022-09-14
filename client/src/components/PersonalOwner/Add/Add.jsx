/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Calendar, DatePicker, Spin } from 'antd';
import { getTrackThunk, allTrackThunk } from '../../../redux/actions/getTrack';
import { getTypeThunk } from '../../../redux/actions/getType';
import { addOneEventThunk } from '../../../redux/actions/ALLEVENTAction';

function Add() {
  const dispatch = useDispatch();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [input, setInput] = useState({});
  const [file, setFile] = useState({});
  const [data, setData] = useState('');

  const fileHandler = (e) => {
    setFile((prev) => (e.target.files[0]));
  };
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: (e.target.value) }));
  };

  const place = useSelector((store) => store.places);
  const type = useSelector((store) => store.type);
  const user = useSelector((store) => store.user);
  const places = place?.filter((elem) => elem.owner_id === user.id);
  const forSelect = useSelector((store) => store.place).filter((elem) => elem.owner_id === user.id);
  const event = useSelector((store) => store.event).filter((elem) => elem['Event.Place.owner_id'] === user.id)
    .filter((elem) => elem['Event.Place.owner_id'] === user.id);

  const DelHandler = () => {

  };

  const onChange = (date, dateString) => {
    setData(dateString);
  };

  const addTrack = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', input.name);
    formData.append('date', data);
    formData.append('info', input.info);
    formData.append('link', input.link);
    formData.append('owner_id', user.id);
    formData.append('type', input.type);
    formData.append('place', input.place);
    dispatch(addOneEventThunk(formData));
    setFile({});
  };

  // console.log(places, place);
  return (
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
          <input value={input?.name} name="name" onChange={inputHandler} type="text" className="form-control text-center rounded-0 mb-1" placeholder="Название" />
          {/* <input value={input?.location} name="date" onChange={inputHandler} type="text" className="form-control text-center rounded-0 mb-1" placeholder="Дата" /> */}
          <DatePicker onChange={onChange} value={input?.date} name="date" className="form-control text-center rounded-0 mb-1" />

          <input value={input?.info} name="info" onChange={inputHandler} type="text" className="form-control text-center rounded-0 mb-1" placeholder="Описание" />
          <input value={input?.link} name="link" onChange={inputHandler} type="text" className="form-control text-center rounded-0 mb-1" placeholder="Ссылка" />

          <div className=" text-center mb-1 w-100">
            <select
              name="place"
              onChange={inputHandler}
              className="form-select text-center "
              id="floatingSelect"
            >
              <option selected value="select">Выберите место</option>
              {forSelect ? (forSelect.map((el) => (
                <option value={el?.id}>{el?.name}</option>
              ))) : <option value="error">Уупс, кажется, что у вас еще нет площадок</option> }
            </select>
          </div>
          <select
            name="type"
            onChange={inputHandler}
            className="form-select text-center mb-1"
            id="floatingSelect"
          >
            <option selected value="select">Выберите событие</option>
            {type ? (type.map((el) => (
              <option value={el?.id}>{el?.name}</option>
            ))) : <option value="error">Уупс, кажется, что у вас еще нет площадок</option> }
          </select>

          <input
            value={input?.file}
            name="file"
            onChange={fileHandler}
            className="
    form-control bg-transparent rounded-0 text-center mb-1"
            type="file"
          />

          <button
            type="submit"
            className="btn bg-transparent rounded-0 text-reset"
            style={{
              width: '35vh'
            }}
            id="inputGroupFileAddon04"
          >
            Добавить

          </button>

        </div>
      </form>
    </div>
  );
}

export default Add;
