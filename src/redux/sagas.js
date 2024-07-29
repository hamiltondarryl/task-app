// src/redux/sagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  REMOVE_TASK_REQUEST,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_FAILURE,
  UPDATE_TASK_STATUS_REQUEST,
  UPDATE_TASK_STATUS_SUCCESS,
  UPDATE_TASK_STATUS_FAILURE,
} from './actions';

// API URL
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Fetch tasks
function* fetchTasks() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put({ type: FETCH_TASKS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_TASKS_FAILURE, payload: error.message });
  }
}

// Add task
function* addTask(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put({ type: ADD_TASK_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ADD_TASK_FAILURE, payload: error.message });
  }
}

// Update task
function* updateTask(action) {
  try {
    const response = yield call(axios.put, `${API_URL}/${action.payload.id}`, action.payload);
    yield put({ type: UPDATE_TASK_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: UPDATE_TASK_FAILURE, payload: error.message });
  }
}

// Update task status
function* updateTaskStatus(action) {
  try {
    const response = yield call(axios.patch, `${API_URL}/${action.payload.id}`, { completed: action.payload.completed });
    yield put({ type: UPDATE_TASK_STATUS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: UPDATE_TASK_STATUS_FAILURE, payload: error.message });
  }
}

// Remove task
function* removeTask(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put({ type: REMOVE_TASK_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: REMOVE_TASK_FAILURE, payload: error.message });
  }
}

export function* rootSaga() {
  yield takeEvery(FETCH_TASKS_REQUEST, fetchTasks);
  yield takeEvery(ADD_TASK_REQUEST, addTask);
  yield takeEvery(UPDATE_TASK_REQUEST, updateTask);
  yield takeEvery(UPDATE_TASK_STATUS_REQUEST, updateTaskStatus);
  yield takeEvery(REMOVE_TASK_REQUEST, removeTask);
}
