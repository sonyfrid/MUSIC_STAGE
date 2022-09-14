import React, { useState } from 'react';
import {
  YMaps, Map, FullscreenControl,
  SearchControl, ZoomControl, ObjectManager, Placemark,
  GeolocationControl, usersMarkerIcon,
} from 'react-yandex-maps';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Card } from 'antd';
import { getAllPlaceThunk } from '../../../redux/actions/AllPlaces';
import MapCard from './MapCard/MapCard';
import styles from '../../Second/Second.module.css';

const { Meta } = Card;

function Maps() {
  const dispatch = useDispatch();
  const [coords, setCoords] = useState([]);
  const places = useSelector((store) => store.place)
    ?.map((elem) => elem.location);
  const info = useSelector((store) => store.place);
  console.log(info);
  useEffect(() => {
    dispatch(getAllPlaceThunk());
  }, []);

  const [mapData, setMapData] = useState({
    center: [55.751574, 37.573856],
    zoom: 10,
  });

  const getCords = async (addreses) => {
    const myAddreses = !Array.isArray(addreses) ? [addreses] : addreses;
    try {
      const myCoords = myAddreses
        .map(async (el) => (await
        (await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=35e6cf58-47dd-4a86-ac07-f77e4cb6028f&format=json&geocode=${el}`))
          .json()).response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' '));
      console.log(myCoords, myAddreses);
      return myCoords;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    return [];
  };

  useEffect(() => {
    if (places.length && !coords.length) {
      getCords(places)
        .then((arr) => Promise.all(arr))
        .then((arr) => setCoords(arr.map((el) => ([el[1], el[0]]))));
    }
    console.log(coords);
  });

  useEffect(() => {
    if (coords.length) {
      setMapData({
        center: [
          coords.reduce((acc, el) => acc + +el[0], 0)
        / coords.length,
          coords.reduce((acc, el) => acc + +el[1], 0)
         / coords.length,
        ],
        zoom: 6,
      });
    }
  }, [coords]);
  const defaultPoint = { center: [55.754138, 37.620324], zoom: 11 };
  return (
    <div className="d-flex flex-column justify-content-center">
      <YMaps
        onLoad={(ymaps) => {
        }}
        query={{
          lang: 'en_RU',
          apikey: '35e6cf58-47dd-4a86-ac07-f77e4cb6028f',
        }}
      >
        <div className={`fontword1   text-light lh-sm ${styles.fontword1}`}>КАРТА </div>
        <div className={`fontword1 fw-lighter text-light lh-sm  ${styles.fontword2}`}>ПЛОЩАДОК</div>
        {/* <p className="text-center fs-1 text-white py-3">Карта площадок</p> */}
        <div className="d-flex justify-content-center align-items-center rounded-0">
          <Map
            width="75vw"
            height="70vh"
            borderRadius="20px"
            defaultState={defaultPoint}
            modules={['geolocation', 'geocode']}
          >
            <SearchControl options={{
              float: 'right'
            }}
            />
            <GeolocationControl options={{
              float: 'left'
            }}
            />
            <FullscreenControl />
            <ZoomControl />
            { coords.map((coordinate, i) => (
              <Placemark
                geometry={coordinate}
                properties={{
                  balloonContentHeader: `${info[i].name}`,
                  balloonContentBody: `
                  <img src=http://localhost:3030/photoOwner/${info[i].photo} style='width:200px' alt="${info[i].name}"/>
                  <p href='' className="rounded-1">${info[i].location}
                  </p>`
                }}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                // children={<MapCard />}
              />

            )) }
          </Map>
        </div>
      </YMaps>
    </div>
  );
}

export default Maps;
