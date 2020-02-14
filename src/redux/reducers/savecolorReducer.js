import {SAVE_COLOR,NAME_COLOR} from '../type';

const initialState = {
    data:[],
    name:[]
}

export default function(state=initialState,action) {
    switch (action.type) {
        case SAVE_COLOR:
            
        return {
                ...state,
                data:action.payload
                
            }
        case NAME_COLOR:
        return {
            ...state,
            name:action.payload
        }
        default:
            return state;
    }
}