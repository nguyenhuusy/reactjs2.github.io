import { GET_TRENDING_GIFS, GET_MORE_TRENDING_GIFS, GIPHY_LOADING,SEARCH_GIFS } from '../type';

const initialState = {
  trending: {
    offset: 0
  },
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_TRENDING_GIFS:
      return {
        ...state,
        trending: action.payload,
        loading: false
      }
    case SEARCH_GIFS:
      return {
        ...state,
        trending: action.payload,
        loading: false
      }
    case GET_MORE_TRENDING_GIFS:
      return {
        ...state,
        trending: {
          ...action.payload,
          data: [ ...state.trending.data, ...action.payload.data ]
        },
        loading: false
      }
    case GIPHY_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}