import { put, all, takeLatest } from "redux-saga/effects";
import { getCatalog } from "../api/catalog";
import { INIT_CATALOG } from "../constants";
import * as actions from "../actions";

function* initCatalog() {
  try {
    const catalog = yield getCatalog();

    yield put(actions.initCatalogSuccess(catalog.data));
  } catch (e) {
    yield put(actions.initCatalogFail("COULD NOT GET CATALOG"));
  }
}

export default function* () {
  yield all([takeLatest(INIT_CATALOG, initCatalog)]);
}
