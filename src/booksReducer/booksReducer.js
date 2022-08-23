//import {events} from '../items/events';
import moment from 'moment';

let dayNow=new Date();
let currDay=moment(dayNow).format('YYYY-MM-DD');
const initialState = {
  books:[],
  createDay:[currDay],
};

export const ADD_BOOKS = "ADD_BOOKS";
export const UPD_DAYS="UPD_DAYS";

const booksReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKS:
      return { ...state, books: [...state.books, action.payload] };
    case UPD_DAYS:
      return {...state, createDay: [...state.createDay, action.payload] };
    default:
      return state;
  }
};
export default booksReducer;

export function addBooksAction(payload) {
  return { type: ADD_BOOKS, payload };
}


export function updDays(payload) {
  return { type: UPD_DAYS, payload };
}
