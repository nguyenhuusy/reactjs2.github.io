import { TEST_REDUX } from '../type';

export const testRedux = (data) => dispatch => {
  dispatch({
    type: TEST_REDUX,
    payload: data
  })
}