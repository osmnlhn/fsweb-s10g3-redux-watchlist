import { legacy_createStore as createStore ,applyMiddleware } from "redux";
import logger from 'redux-logger';
import reducer from "./reducers/movieReducer";


export const store = createStore(reducer,applyMiddleware(logger));


