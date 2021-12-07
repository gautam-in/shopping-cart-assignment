import axios from "axios";
import { takeEvery, all, put, delay } from "redux-saga/effects";

const ADD_BANNER = "banners/ADD_BANNER";
const INITIATE_ADD_BANNER = "banners/INITIATE_ADD_BANNER";

const initialState = {
  banners: [],
};

function* getBanners() {
  try {
    yield delay(2000);
    const { data: banners } = yield axios({
      url: "http://localhost:5000/banners",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    yield put({ type: ADD_BANNER, payload: banners });
  } catch (e) {
    console.log(e);
  }
}

export function initiateAddBanners() {
  return {
    type: INITIATE_ADD_BANNER,
  };
}
export function* watchAddBanners() {
  yield takeEvery(INITIATE_ADD_BANNER, getBanners);
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_BANNER:
      return {
        ...state,
        banners: action.payload,
      };
    default:
      return state;
  }
}

export function* watchBanners() {
  yield all([watchAddBanners()]);
}
