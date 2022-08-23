import {events} from '../items/events';

const initialState = {
  events:events,
  hamar:'',
};

console.log(initialState.events);

export const ADD_EVENTS = "ADD_EVENTS";
export const UPD_HAMAR="UPD_HAMAR";

const eventsReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_EVENTS:
      return { ...state, events: [...state.events, action.payload] };
    case UPD_HAMAR:
      return { ...state, hamar:action.payload };
      default:
      return state;
  }
};
export default eventsReducer;

export function addEventsAction(payload) {
  return { type: ADD_EVENTS, payload };
}

export function updEventsHamar(payload) {
  return { type: UPD_HAMAR, payload };
}
