import {tasks} from '../items/tasks';

const initialState = {
  tasks:tasks,
  taskId:{}
  };


export const ADD_TASKS = "ADD_TASKS";
export const CLICK_ID = "CLICK_ID";
export const REMOVE_TASKS = "REMOVE_TASKS";
export const UPDATE_TASKS = "UPDATE_TASKS";

const taskReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASKS:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== action.payload)
      };
    case UPDATE_TASKS:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload.id
            ? {
              ...el,
              title: action.payload.title,
              projects:action.payload.projects,
              dat:action.payload.dat,
              duration:action.payload.duration
            }
            : el
        )
      };
    case CLICK_ID:
      return  { ...state, taskId: action.payload };
      ;
      default:
      return state;
  }
};
export default taskReducer;

export function addTaskAction(payload) {
  return { type: ADD_TASKS, payload };
}

export function removeTasksAction(payload) {
  return { type: REMOVE_TASKS, payload };
}

export function editTasksAction(payload) {
  return { type: UPDATE_TASKS, payload };
}

export function clickIdAction(payload) {
  return { type: CLICK_ID, payload };
}


