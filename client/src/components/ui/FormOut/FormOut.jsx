import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../../redux/actions/userAction';

export default function FormOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(signOut());
    navigate('/');
  }, []);

  return null;
}
