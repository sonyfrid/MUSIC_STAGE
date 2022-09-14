import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { addOwnerThunk } from '../../redux/actions/allOwnerAction';
import { addEventThunk } from '../../redux/actions/allEventsAction';
import { addPlaceThunk } from '../../redux/actions/allPlaceAction';
import NaviPers from '../ui/Navi/NaviPers';
import Tabses from './Table/Table';
import { allEventThunk } from '../../redux/actions/ALLEVENTAction';
import { getTypeThunk } from '../../redux/actions/getType';
import { getAllPlaceThunk } from '../../redux/actions/AllPlaces';

export default function PersonalPage() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const style = {
    position: 'absolute',
    top: '15%',
    left: '86%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  const owners = useSelector((store) => store.owner);
  const user = useSelector((store) => store.user);
  const event = useSelector((store) => store.event);
  const [currUser, setCurrUser] = useState([]);

  useEffect(() => {
    setCurrUser(owners?.allOwner?.filter((elem) => elem.id === user.id)[0]);
  }, [owners]);

  // const currUser = owners?.allOwner?.filter((elem) => elem.id === user.id)[0];
  const events = event?.filter((elem) => elem['Event.Place.Owner.id'] === user.id)[0];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addOwnerThunk());
    dispatch(addEventThunk());
    dispatch(addPlaceThunk());
    dispatch(getTypeThunk());
    dispatch(getAllPlaceThunk());
    dispatch(allEventThunk());
  }, []);
  return (
    <div
      style={{
        backgroundColor: `rgb(${230}, ${230}, ${230})`,
        width: '100vw',
        height: '100vh',
      }}
    >
      <div className="d-flex flex-column mb-3 w-100 h-100 d-inline-block">
        <NaviPers />
        <div className="d-flex p-2 h-40 d-inline-block justify-content-between" onClick={handleOpen}>
          <div className="d-flex flex-column justify-content-around ms-5">
            <div className="d-flex flex-column justify-content-around">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  {(currUser?.photo) ? (<img src={`http://localhost:3030/photo/${currUser?.photo}`} alt="erro" />) : (<img src="http://localhost:3030/photo/owner.jpeg" alt="erro" />) }
                  {/* <img src={`http://localhost:3030/photo/${currUser?.photo}`} alt="erro" /> */}
                  {/* {currUser && <img src={`http://localhost:3030/photo/${currUser.photo}`} alt="3" /> } */}
                </div>
              </div>
            </div>
            <div className="d-flex fw-lighter fs-6">Организатор</div>
          </div>
          {(currUser?.name) ? (<div className="p-2 flex-fill  ms-5 fs-4 fw-bold">{currUser?.name}</div>) : (<div className="p-2 flex-fill  ms-5 fs-4 fw-bold">Александр Ионов</div>)}
          <div className="p-2 flex-fill  ms-5 fs-4 fw-bold">{currUser?.name}</div>
        </div>

        <div className="w-50 h4 pb-2 mb-4 border-bottom border-danger" />

        <div className="d-flex h-75 ">
          <div className="d-flex w-50 flex-column justify-content-between px-5">
            {(currUser?.info) ? (<div className="d-flex text-center fs-6 ">{currUser?.info}</div>)
              : (
                <div className="d-flex text-center fs-6 ">
                  Создатель андеграундного клуба «Ионотека»,
                  фестиваля «Ионосфера», лейбла Ionoff Music и
                  первый продюсер певицы Гречки после расставания с
                  ней продолжает растить новые музыкальные силы – группы
                  «Ритуальные услуги» и «Бенгальские подонки».
                </div>
              )}

            <div className="position-absolute bottom-10 start-0 opacity-50" style={{ width: '200px' }}>
              <img src="././ySCJx3esDdM.png" alt="logo" />
            </div>

            <div className="d-flex justify-content-center mb-3 mt-3 flex-row ">
              <div className=" ms-2 ">
                <a href={currUser?.instagram}><img src="././png/003-instagram.png" style={{ width: '30px' }} alt="logo" /></a>
              </div>
              <div className=" ms-2 ">
                <a href={currUser?.mail}><img src="././png/004-mail.png" style={{ width: '30px' }} alt="logo" /></a>
              </div>
            </div>
          </div>
          <div className="w-75 d-flex flex-column p-3 =">
            <Tabses key={events?.id} />
          </div>

        </div>
      </div>

    </div>

  );
}
