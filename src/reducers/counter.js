import * as types from '../actions/ActionTypes';
//reducer: 함수 -> 기존 state 복사, 변경, return
const initialState = {
    number: 0,
    dummy: 'dumbdumb',
    dumbObject: {
        d:0,
        u:1,
        m:2,
        b:3
    }
};

export default function counter(state, action) { // state = initialState적을경우, 아래 8-9줄과 동일한 의미 진행
    if(typeof state === 'undefined') {
        return initialState;
    }

    /*... */
    switch(action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number +1,
                dumbObject: {...state.dumbObject, u:0 } //기존값들은 그대로, u값만 변경해서 덮어씌우기 가능
            }; //state 값자체 변경이 아님! 새로운 겍체 생성, 변경된 정보 저장 (Reducer 역할)

        case types.DECREMENT:
            return {
                ...state,
                number: state.number -1
            };
        default: //SET_COlOR action은 다른 reducer에서 진행..
            return state;
    }
}
