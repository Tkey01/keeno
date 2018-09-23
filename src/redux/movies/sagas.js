import {
  put,
  call,
  takeLatest,
  takeEvery,
  fork,
} from 'redux-saga/effects';

import * as CONSTANTS from './constants';
import {
  setMovies,
  setSearchResults,
  setMovieById,
  setMovieVideo,
  setSimilarMovies,
  setError,
  clearError,
  addMovies,
  setCredits,
} from './actions';
import {
  requestNowPlayingMovies,
  requestMoviesByKeywords,
  requestTop100,
  requestMovieById,
  requestMovieVideos,
  requestSimilarMovies,
  requestCredits,
} from './requests';

function* fetchNowPlaying({ payload } = { payload: { page: 1 } }) {
  const { page, genre, filter } = payload;
  const { data } = yield call(requestNowPlayingMovies, page, genre, filter);
  if (data && data.results) {
    if (page) {
      yield put(addMovies(data.results, data.total_pages));
    } else {
      yield put(setMovies(data.results));
    }
  }
}

function* fetchTop100({ payload }) {
  const { page, genre, filter } = payload;
  const { data } = yield call(requestTop100, page, genre, filter);
  if (data && data.results) {
    if (page) {
      yield put(addMovies(data.results, data.total_pages));
    } else {
      yield put(setMovies(data.results));
    }
  }
}

const delay = ms => new Promise(res => setTimeout(res, ms));

function* searchMovies({ payload }) {
  try {
    yield delay(500);
    const { data } = yield call(requestMoviesByKeywords, payload);
    yield put(clearError());
    yield put(setSearchResults(data.results));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

function* fetchCredits(payload) {
  const { id } = payload;
  const { data } = yield call(requestCredits, id);
  if (data && data.cast && data.crew) {
    yield put(setCredits(data));
  }
}

function* searchById({ payload } = { payload: { id: 767 } }) {
  try {
    const { data } = yield call(requestMovieById, payload.id);
    yield put(clearError());
    yield put(setMovieById(data));
    const dataVid = yield call(requestMovieVideos, payload.id);
    const validVid = dataVid.data.results.length > 0
      ? dataVid.data.results[0].key
      : '2Z4m4lnjxkY';
    yield put(setMovieVideo(validVid));
    const dataSimilar = yield call(requestSimilarMovies, payload.id);
    yield put(setSimilarMovies(dataSimilar.data.results.slice(0, 4)));
    yield fetchCredits(payload);
  } catch (error) {
    yield put(setError(error.toString()));
  }
}


export function* sagas() {
  yield fork(searchById);
  yield fork(fetchNowPlaying);
  yield takeLatest(CONSTANTS.SEARCH_MOVIES, searchMovies);
  yield takeLatest(CONSTANTS.FETCH_TOP_100, fetchTop100);
  yield takeEvery(CONSTANTS.SEARCH_BY_ID, searchById);
  yield takeLatest(CONSTANTS.FETCH_NOW_PLAYING, fetchNowPlaying);
}
