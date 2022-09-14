/* eslint-disable max-len */
/* eslint-disable quotes */
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addEventThunk } from '../../redux/actions/allEventsAction';
import Card from './Card';
import styles from './Second.module.css';
import { getSearchThunk } from '../../redux/actions/searchAction';
import { getTypeThunk } from '../../redux/actions/getType';
import Navi from '../ui/Navi/Navi';
import 'react-toastify/dist/ReactToastify.css';
import { getalleventsThunk } from '../../redux/actions/getAllEventAction';
import { getEventStatusThunk } from '../../redux/actions/eventStatusAction';

export default function Event() {
  const [input, setInput] = useState('');

  const [select, setSelect] = useState('');

  const dispatch = useDispatch();
  const changeType = (e) => {
    setInput(e.target.value);
  };

  const search = useSelector((store) => store.search);
  const user = useSelector((store) => store.user);
  const type = useSelector((store) => store.type);
  const justevent = useSelector((store) => store.justevent);
  const event = useSelector((store) => store.event);

  useEffect(() => {
    dispatch(addEventThunk());
    // dispatch(getSearchThunk());
    dispatch(getTypeThunk());
    dispatch(getalleventsThunk());
    // dispatch(getEventStatusThunk(user.id));
    dispatch(getEventStatusThunk());
  }, []);

  const multerPath = 'http://localhost:3030/photo/';
  return (
    <div
      id="second"
      style={{
        backgroundColor: `rgb(${68}, ${76}, ${93})`,
        width: '100vw',
        height: '100vh'
      }}
    >
      <Navi typeLogo="white" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
      />
      <div className="d-flex flex-column  w-100 h-100 d-inline-block p-3">
        <div className="d-flex h-40 d-inline-block justify-content-center ">
          <div className="w-75  mt-2 justify-content-center">
            <div className={`fontword1   text-light lh-sm ${styles.fontword1}`}>АФИША </div>
            <div className={`fontword1 fw-lighter text-light lh-sm  ${styles.fontword2}`}>СОБЫТИЙ</div>
            <div className={`selectorPad d-flex flex-row mt-3 justify-content-evenly ${styles.selectorPad}`}>
              <input
                value={input}
                placeholder="Введите название"
                onChange={(e) => setInput(e.target.value)}
                type="text"
                className="w-25 form-control text-center my-1"
              />
              <div className="w-25 text-center my-1">
                <select
                  className="form-select text-center"
                  aria-label="Default select example"
                  value={select}
                  id="floatingSelect"
                  onChange={(e) => setSelect(e.target.value)}
                >
                  <option selected value={select}>Выберите событие</option>
                  {type?.map((el) => (
                    <option
                      key={el.id}
                      value={el.id}
                    >
                      {el.name}
                    </option>
                  ))}
                </select>
              </div>

            </div>

          </div>
        </div>
        <div className={`overflow-auto ${styles.over}`} style={{ marginTop: '100px' }}>
          {select ? justevent?.filter(((el) => +el.type_id === +select))
            .filter(((el) => el.name
              .toLowerCase()
              .includes(input?.toLowerCase())))
            .map((el) => ((<Card photo={`${multerPath}${el.photo}`} oneEvent={el} el={event?.filter((element) => element['Event.id'] === el.id)} />)
            )) : justevent?.map((el) => ((<Card photo={`${multerPath}${el.photo}`} oneEvent={el} el={event?.filter((element) => element['Event.id'] === el.id)} />)
          ))}
        </div>
      </div>
    </div>
  );
}
