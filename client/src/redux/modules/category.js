import axios from "axios";
import { takeEvery, all, put, delay } from "redux-saga/effects";

const ADD_CATEGORY = "category/ADD_CATEGORY";
const INITIATE_ADD_CATEGORY = "category/INITIATE_ADD_CATEGORY";

const initialState = {
  categories: [],
  fetching: true,
};

function* getAddCategory() {
  try {
    yield delay(2000);
    const { data: categories } = yield axios({
      url: "http://localhost:5000/categories",
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    yield put({ type: ADD_CATEGORY, payload: categories });
  } catch (e) {
    console.log(e);
  }
}

export function initiateAddCategory() {
  return {
    type: INITIATE_ADD_CATEGORY,
  };
}
export function* watchAddCategory() {
  yield takeEvery(INITIATE_ADD_CATEGORY, getAddCategory);
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        fetching: false,
      };
    default:
      return state;
  }
}

export function* watchCategory() {
  yield all([watchAddCategory()]);
}
