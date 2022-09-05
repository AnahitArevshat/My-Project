import {developers} from '../items/developers';

const initialState = {
  developers:developers,
  devId:{}
};

export const CLICK_ID = "CLICK_ID";
export const UPDATE_DEV = "UPDATE_DEV";

const notificReducer = function (state = initialState, action) {
  switch (action.type) {

    case UPDATE_DEV:
      return {
        ...state,
        developers: state.developers.map((el) =>
          el.id === action.payload.id
            ? {
              ...el,
              notif: action.payload.notif,
            }
            : el
        )
      };
    case CLICK_ID:
      return  { ...state, devId: action.payload };

      default:
      return state;
  }
};
export default notificReducer;


export function editNotificAction(payload) {
  return { type: UPDATE_DEV, payload };
}

export function clickIdDevAction(payload) {
  return { type: CLICK_ID, payload };
}


