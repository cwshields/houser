import { createStore } from 'redux';

const initialState = {
  property: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  img: '',
  mortgage: '',
  rent: ''
}

export const STEP_ONE = 'STEP_ONE'
export const STEP_TWO = 'STEP_TWO'
export const STEP_THREE = 'STEP_THREE'
export const CLEAR_STORE = 'CLEAR_STORE'

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case STEP_ONE:
      return {
        ...state,
        property: payload.property,
        address: payload.address,
        city: payload.city,
        state: payload.state,
        zip: payload.zip
      }
    case STEP_TWO:
      return {
        ...state,
        img: payload.img
      }
    case STEP_THREE:
      return {
        ...state,
        mortgage: payload.mortgage,
        rent: payload.rent
      }
    case CLEAR_STORE:
      return {
        property: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        img: '',
        mortgage: '',
        rent: ''
      }
    default:
      return state;
  }
}

export default createStore(reducer);