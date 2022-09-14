import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { signIn } from '../../../redux/actions/userAction';

export default function FormAuth({ typeUser }) {
  const [userInput, setUserInput] = useState({
    mail: '',
    pass: '',
    typeUser,
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    dispatch(signIn(userInput, navigate));
  };

  return (
    <form>
      <Input onChange={changeHandler} type="mail" name="mail" placeholder="Электронная почта" />
      <Input onChange={changeHandler} type="password" name="pass" placeholder="Пароль" />
      <Button funcOnClick={() => submitHandler()} type="button" body="ВОЙТИ" />
    </form>
  );
}
