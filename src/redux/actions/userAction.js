import { ActionTypes } from '../constants/actionTypes';

export const setUser = (users) => {
  return {
    type: ActionTypes.setUserInfo,
    payload: users,
  };
};
