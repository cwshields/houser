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

function reducer(state = initialState, action) {
  const { property, address, city, zip, img, mortgage, rent } = payload
  const { type, payload } = action
  switch (type) {
    case STEP_ONE:
      return {
        ...state,
        property: property,
        address: address,
        city: city,
        state: state,
        zip: zip
      }
    case STEP_TWO:
      return {
        ...state,
        img: img
      }
    case STEP_THREE:
      return {
        ...state,
        mortgage: mortgage,
        rent: rent
      }
    default:
      return state;
  }
}

export default createStore(reducer);