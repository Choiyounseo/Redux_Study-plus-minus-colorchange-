import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers'; //현재 reducers/index.js파일 호출이므로, ./reducers/index까지 할 필요없음
// import * as actions from './actions';
import { Provider } from 'react-redux';

const store = createStore(reducers); //store 생성 완료 => component연결 필요

// console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(actions.increment()); //action보낼때 사용하는 함수: dispatch
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200, 200, 200]));
//
// unsubscribe();
// store.dispatch(actions.setColor([210, 210, 210]));


ReactDOM.render(
  <Provider store = {store}>
      <App />
  </Provider>,
  document.getElementById('root')
)

//write 'npm start to run'
