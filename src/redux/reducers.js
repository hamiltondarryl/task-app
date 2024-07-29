// src/redux/reducers.js
import {
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_FAILURE,
  UPDATE_TASK_STATUS_SUCCESS,
  UPDATE_TASK_STATUS_FAILURE,
} from './actions';

const initialState = {
  tasks: [],
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return { ...state, tasks: action.payload };
    case FETCH_TASKS_FAILURE:
      return { ...state, error: action.payload };
    case ADD_TASK_SUCCESS:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case ADD_TASK_FAILURE:
    case UPDATE_TASK_FAILURE:
    case REMOVE_TASK_FAILURE:
    case UPDATE_TASK_STATUS_FAILURE:
      return { ...state, error: action.payload };
    case UPDATE_TASK_SUCCESS:
    case UPDATE_TASK_STATUS_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case REMOVE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
