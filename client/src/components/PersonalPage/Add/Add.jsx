import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrackThunk, allTrackThunk } from '../../../redux/actions/allTrackAction';

function Add() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [file, setFile] = useState({});

  const user = useSelector((store) => store.user);
  const track = useSelector((store) => store.track);

  const fileHandler = (e) => {
    setFile((prev) => (e.target.files[0]));
  };

  const addTrack = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id', user.id);
    dispatch(getTrackThunk(user, formData));
    setFile({});
  };

  return (
    <div className="">
      <form onSubmit={addTrack} encType="multipart/form-data">
        <div className="d-flex d-flex justify-content-center ">

          <div className="d-flex align-items-center w-50 mb-1">
            <input
              value={input.file}
              name="file"
              onChange={fileHandler}
              className="form-control bg-transparent rounded-0 text-center"
              id="formFileSm"
              type="file"
              style={{
                height: '7vh',
              }}
            />
          </div>

          <div>
            <button
              type="submit"
              className="btn bg-transparent rounded-0 text-reset mb-1 "
              style={{
                height: '6vh',
              }}
            >
              Добавить

            </button>
          </div>

        </div>

      </form>
      <hr />
    </div>
  );
}

export default Add;
