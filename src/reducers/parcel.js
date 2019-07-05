import { UPDATE_PARCEL, START_OVER } from '../actions/types';

const initialState = {
  parcel: null
}

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_PARCEL:
      return { ...state, parcel: action.payload }
    case START_OVER:
      return initialState
    default:
      return state;
  }
}