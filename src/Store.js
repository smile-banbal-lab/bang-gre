import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // redux-thunk를 import해야 합니다.
import rootReducer from './modules'; // rootReducer를 import합니다.

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
