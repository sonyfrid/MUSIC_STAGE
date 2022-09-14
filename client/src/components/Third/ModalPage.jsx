import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabses from './TableModal';
import { addModalThunk } from '../../redux/actions/oneArtistAction';

export default function PersonalPage({ id, visible }) {
  console.log('--', id);
  const one = useSelector((store) => store.one);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addModalThunk(id));
  }, [visible]);

  return (
    <>
      {one.map((el) => (
        <div style={{
          backgroundColor: `rgb(${230}, ${230}, ${230})`,
        }}
        >
          <div className="d-flex flex-column mb-3 w-100 h-100 d-inline-block">

            <div className="d-flex p-2 h-40 d-inline-block justify-content-between">

              <div className="d-flex flex-column justify-content-around ms-5">

                <div className="d-flex flex-column justify-content-around">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={`http://localhost:3030/photo/${el.photo}`} alt="567" />
                    </div>
                  </div>
                </div>

                <div className="d-flex fw-lighter">Жанр:</div>
                <div className="">{el.genre}</div>
              </div>

              <div className="p-2 flex-fill  ms-5 fs-4 fw-bold">{el.name}</div>

              <div className="avatar">
                <img src="././black2logo.png" alt="logo" />
              </div>
            </div>

            <div className="w-50 h4 pb-2 mb-4 border-bottom border-danger" />

            <div className="d-flex h-75 justify-content-between">
              <div className="d-flex w-50 flex-column justify-content-between px-5">
                <div className="d-flex m-3" />
                <div className="d-flex text-center ">{el.info}</div>
                <div className="d-flex " />

                <div className="d-flex justify-content-center mb-3 mt-3 flex-row ">
                  <div className="ms-1 ">
                    <a href={el.vk}><img src="././png/002-vkontakte.png" style={{ width: '20px' }} alt="logo" /></a>
                  </div>
                  <div className=" ms-2 ">
                    <a href={el.instagram}><img src="././png/003-instagram.png" style={{ width: '20px' }} alt="logo" /></a>
                  </div>
                  <div className=" ms-2 ">
                    <a href={el.mail}><img src="././png/004-mail.png" style={{ width: '20px' }} alt="logo" /></a>
                  </div>
                </div>

              </div>
              {/* ебануть таблицу */}
              <div className="w-75 d-flex flex-column p-3">
                <Tabses id={id} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
