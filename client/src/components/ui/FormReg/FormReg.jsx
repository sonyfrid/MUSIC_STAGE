import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import { signUp } from '../../../redux/actions/userAction';

export default function FormReg({ typeUser }) {
  const [userReg, setUserReg] = useState({
    name: '',
    mail: '',
    pass: '',
    photo: '',
    instagram: '',
    phone: '',
    vk: '',
    genre: '',
    genre_id_fs: '',
    telegram: '',
  });

  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const [photo, setPhoto] = useState({});

  const fileHandler = (e) => {
    setPhoto((prev) => (e.target.files[0]));
  };

  const changeHandler = (e) => {
    setUserReg((prev) => ({ ...prev, [e.target.name]: (e.target.value) }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    const formData = new FormData();
    formData.append('name', userReg.name);
    formData.append('mail', userReg.mail);
    formData.append('pass', userReg.pass);
    formData.append('photo', photo);
    formData.append('instagram', userReg.instagram);
    formData.append('phone', userReg.phone);
    formData.append('vk', userReg.vk);
    formData.append('genre', userReg.genre);
    formData.append('info', userReg.info);
    formData.append('genre_id_fs', userReg.genre_id_fs);
    formData.append('telegram', userReg.telegram);
    dispatch(signUp(formData, navigate));
  };

  return (
    <form>
      <div className="d-flex  flex-column">
        <Input onChange={changeHandler} type="text" name="name" placeholder="Имя" />
        <Input onChange={changeHandler} type="mail" name="mail" placeholder="Электронная почта" />
        <Input onChange={changeHandler} type="password" name="pass" placeholder="Пароль" />
        {/* <Input onChange={changeHandler} type="url" name="photo" placeholder="Фото" /> */}
        <input value={input.photo} name="photo" onChange={fileHandler} className="form-control bg-transparent rounded-0 my-3 text-reset w-75" id="formFileSm" type="file" />
        <Input onChange={changeHandler} type="text" name="instagram" placeholder="Instagram" />
        <Input onChange={changeHandler} type="phone" name="phone" placeholder="Телефон" />
        {typeUser === 'artist' && (
          <>
            <Input onChange={changeHandler} type="text" name="vk" placeholder="ВКонтакте" />
            <Input onChange={changeHandler} type="text" name="genre" placeholder="Жанр" />
            <Select
              onChange={changeHandler}
              name="genre_id_fs"
              placeholder="Жанр для поиска"
              options={[
                { value: '1', body: 'Indie Rock' },
                { value: '2', body: 'Indie Pop' },
                { value: '3', body: 'Dream Pop' },
                { value: '4', body: 'Rock' },
                { value: '5', body: 'Shoegaze' },
                { value: '6', body: 'Punk' },
                { value: '7', body: 'New wave' },
                { value: '8', body: 'Pop-punk' },
                { value: '9', body: 'Alternative rock' },
              ]}
            />
          </>
        )}
        {typeUser === 'owner' && (
          <Input onChange={changeHandler} type="text" name="telegram" placeholder="Telegram" />
        )}
        <Textarea onChange={changeHandler} name="info" placeholder="Короткое описание" />
        <Button funcOnClick={() => submitHandler()} type="button" body="ОТПРАВИТЬ" />
      </div>
    </form>
  );
}
