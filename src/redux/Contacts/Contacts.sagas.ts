import { all, takeLatest, call, put } from 'redux-saga/effects'

import { actions } from './Contacts.slice'
import {
  createContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact
} from '../../utils/api/api'

export function* onGetListOfContactsStart ({
  payload: { currentPage }
}: {
  payload: { currentPage: number }
}) {
  try {
    const response: Promise<any> = yield call(getContacts, currentPage)
    const { data }: any = response

    yield put(actions.getListOfContactsComplete({ data }))
  } catch (e) {}
}

function* onGetContactInfoStart ({
  payload: { id }
}: {
  payload: { id: string }
}) {
  try {
    const response: Promise<any> = yield call(getContact, id)
    const { data }: any = response

    yield put(actions.getContactInfoComplete({ data }))
  } catch (error: any) {
    yield put(actions.getContactInfoError({ error: error.message }))
  }
}
function* onDeleteContactStart ({
  payload: { id }
}: {
  payload: { id: string }
}) {
  try {
    yield call(deleteContact, id)

    yield put(actions.deleteContactComplete())
  } catch (error: any) {
    yield put(actions.deleteContactError({ error: error.message }))
  }
}

function* onCreateContactStart ({
  payload
}: {
  payload: { firstName: string; lastName: string; email: string; phone: string }
}) {
  try {
    yield call(createContact, payload)

    yield put(actions.createContactComplete())
  } catch (error: any) {
    yield put(actions.createContactError({ error }))
  }
}
function* onUpdateContactStart ({
  payload
}: {
  payload: {
    firstName: string
    lastName: string
    email: string
    phone: string
    id: string
  }
}) {
  try {
    const { id, ...restPayload } = payload
    yield call(updateContact, id, {
      ...restPayload
    })

    yield put(actions.updateContactComplete())
  } catch (error: any) {
    yield put(actions.updateContactError({ error }))
  }
}
function* getListOfContactsStart () {
  yield takeLatest(actions.getListOfContactsStart, onGetListOfContactsStart)
}

function* getContactInfoStart () {
  yield takeLatest(actions.getContactInfoStart, onGetContactInfoStart)
}

function* deleteContactStart () {
  yield takeLatest(actions.deleteContactStart, onDeleteContactStart)
}
function* createContactStart () {
  yield takeLatest(actions.createContactStart, onCreateContactStart)
}
function* updateContactStart () {
  yield takeLatest(actions.updateContactStart, onUpdateContactStart)
}

export default function* ContactsSagas () {
  yield all([
    call(getListOfContactsStart),
    call(getContactInfoStart),
    call(deleteContactStart),
    call(createContactStart),
    call(updateContactStart)
  ])
}
