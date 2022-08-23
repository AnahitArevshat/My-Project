import {
  GET_PHOTOS,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE,
  GET_PHOTOS_CANCEL,
} from "./reducer";
import { createLogic } from "redux-logic";
import axios from "axios";

export const getLogicPhoto = createLogic({
  type: GET_PHOTOS,
  latest: true,
  process({state, action}, dispatch, done) {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(resp => dispatch({type: GET_PHOTOS_SUCCESS, payload: resp}))
      .then(() => done())
      //.catch(error => console.log(error));

  },
 });


