import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const enhancer = compose(applyMiddleware(thunk));

export default createStore(rootReducers, enhancer);