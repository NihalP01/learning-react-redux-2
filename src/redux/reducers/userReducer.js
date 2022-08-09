import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  users: [],
};

export const usersReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.setUserInfo:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};
