import { TEST_REDUX } from '../type';

const initialState = {
  data: '',
  label: 'hello',
  id: 'abcd'
}

export default function(state = initialState, action) {
  switch(action.type) {
    case TEST_REDUX:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}