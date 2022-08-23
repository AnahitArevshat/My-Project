import {
  GET_PHOTOS,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE,
  GET_PHOTOS_CANCEL
} from "../reducer";

export function getPhotosAction() {
  return {
    type: GET_PHOTOS,
  };
}
export function get_Photos_Cancel() {
  return { type: GET_PHOTOS_CANCEL };
}
export function getPhotosSuccessAction(payload) {
  return { type: GET_PHOTOS_SUCCESS, payload };
}

export function getPhotosFailureAction(error) {
  return { type: GET_PHOTOS_FAILURE, error: true };
}
