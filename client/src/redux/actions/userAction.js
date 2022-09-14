import { DELETE_USER, SET_USER } from '../types/userTypes';
import * as endPoints from '../../config/endPoints';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const signUp = (payload, navigate) => async (dispatch) => {
  const response = await fetch(endPoints.signUp(), {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    credentials: 'include',
    body: payload,
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    navigate('/personalPage');
  } else {
    navigate('/');
  }
};

export const signIn = (payload, navigate) => async (dispatch) => {
  const response = await fetch(endPoints.signIn(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    navigate('/personalPage');
  }
};

export const signOut = () => async (dispatch) => {
  const response = await fetch(endPoints.signOut(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    dispatch(deleteUser());
  }
};

export const checkAuth = () => async (dispatch) => {
  const response = await fetch(endPoints.checkAuth(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
  }
};
