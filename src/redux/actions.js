// src/redux/actions.js
export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';

export const UPDATE_TASK_REQUEST = 'UPDATE_TASK_REQUEST';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE';

export const REMOVE_TASK_REQUEST = 'REMOVE_TASK_REQUEST';
export const REMOVE_TASK_SUCCESS = 'REMOVE_TASK_SUCCESS';
export const REMOVE_TASK_FAILURE = 'REMOVE_TASK_FAILURE';

export const UPDATE_TASK_STATUS_REQUEST = 'UPDATE_TASK_STATUS_REQUEST';
export const UPDATE_TASK_STATUS_SUCCESS = 'UPDATE_TASK_STATUS_SUCCESS';
export const UPDATE_TASK_STATUS_FAILURE = 'UPDATE_TASK_STATUS_FAILURE';

// Action creators
export const fetchTasksRequest = () => ({ type: FETCH_TASKS_REQUEST });
export const addTaskRequest = (task) => ({ type: ADD_TASK_REQUEST, payload: task });
export const updateTaskRequest = (task) => ({ type: UPDATE_TASK_REQUEST, payload: task });
export const removeTaskRequest = (taskId) => ({ type: REMOVE_TASK_REQUEST, payload: taskId });
export const updateTaskStatusRequest = (task) => ({ type: UPDATE_TASK_STATUS_REQUEST, payload: task });
