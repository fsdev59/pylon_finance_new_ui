import {
  all,
  takeEvery,
  takeLatest,
  call,
  put,
  fork,
} from "redux-saga/effects";

import axios from "axios";
import actions from "./actions";

// export function* loginRequest() {
//   yield takeLatest(actions.LOGIN_REQUEST, function* ({ payload }) {
//     return;
//   });
// }

export default function* rootSaga() {
  yield all([]);
}
