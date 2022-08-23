const initialState = {
  isFetching: false,
  notPhotos: "No Photos yet",
  photos: [],
};

export const GET_PHOTOS = "GET_PHOTOS";
export const GET_PHOTOS_CANCEL = "GET_PHOTOS_CANCEL";
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS";
export const GET_PHOTOS_FAILURE = "GET_PHOTOS_FAILURE";

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    /*case GET_PHOTOS:
      return { ...state, isFetching: true };*/

    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        photos: action.payload.data,
      };
    case GET_PHOTOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        notPhotos: "Failure fetching photos data",
      };
    default:
      return state;
  }
};

export default photoReducer;
