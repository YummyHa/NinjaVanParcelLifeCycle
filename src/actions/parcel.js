import { UPDATE_PARCEL, START_OVER } from './types';

export const updateParcel = (parcel) => dispatch => {
  dispatch({
    type: UPDATE_PARCEL,
    payload: parcel
  })
}

/**
 * Delete orders
 */
export const startOver = () => dispatch => {
  dispatch({
    type: START_OVER
  })
}
