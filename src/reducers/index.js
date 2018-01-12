//reduce file이 여러개 => 합치는 작업 필요
import {combineReducers} from 'redux';
import counter from './counter';
import ui from './ui';

const reducers = combineReducers({
    counter, ui
});

export default reducers; //최종 export하기!
