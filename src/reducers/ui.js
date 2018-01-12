import * as types from '../actions/ActionTypes';

const initialState = {
    color: [255, 255, 255]
};

export default function ui(state = initialState, action) {
    if(action.type === types.SET_COLOR) {
        return {
            color: action.color
        };
    } else { //Action 이 SET_COLOR가 아닐경우, 원래의 state그대로 반환
        return state;
    }
}
