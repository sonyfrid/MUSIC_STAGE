/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.min.css';
import Card from './Card';
import { addArtThunk } from '../../redux/actions/allArtistsAction';

export default function OneArtist({ input, select }) {
  const art = useSelector((store) => store.art);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addArtThunk());
  }, [input]);
  return (
    <div>
      {art
        .filter(((el) => el.name
          .toLowerCase()
          .includes(input.toLowerCase()))).map((el) => (
            <Card
              id={el.id}
              key={el.id}
              name={el.name}
              genre={el.genre}
              photo={el.photo}
            />
          ))}
    </div>
  );
}
