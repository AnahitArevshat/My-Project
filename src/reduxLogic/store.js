import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { createLogicMiddleware } from "redux-logic";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import photoReducer from "../reduxLogic/reducer";
import {getLogicPhoto}  from "./logic";
import taskReducer from '../tasksReducer/taskReducer';
import eventsReducer from '../eventsReducer/eventsReducer';
import booksReducer from '../booksReducer/booksReducer';
const logic = [getLogicPhoto];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  };
/*const rootReducer = combineReducers({
  photos: photoReducer
});*/

const rootReducer = combineReducers({
  photosReducer: persistReducer(persistConfig, photoReducer),
  tasks:taskReducer,
  events:eventsReducer,
  books:booksReducer

});

const logicMiddleware = createLogicMiddleware(logic);
const composedMiddleware = applyMiddleware(logicMiddleware);

export const store = createStore(rootReducer, composedMiddleware);


export const persistor = persistStore(store);


