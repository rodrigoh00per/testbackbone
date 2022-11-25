import { all, call } from "redux-saga/effects";
import ContactsSagas from "./Contacts/Contacts.sagas";

export default function* rootSaga() {
  yield all([call(ContactsSagas)]);
}
