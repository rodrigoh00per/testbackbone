import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ContactsState {
  list: {
    error: null | string
    isFetching: boolean
    data: {}
  }
  contact: {
    error: null | string
    isFetching: boolean
    data: {}
    update: {
      isFetching: boolean
      error: null | string
      completed: boolean
    }
    create: {
      isFetching: boolean
      error: null | string
      completed: boolean
    }
    delete: {
      isFetching: boolean
      error: null | string
      completed: boolean
    }
  }
}

const initialState: ContactsState = {
  list: {
    error: null,
    isFetching: false,
    data: {}
  },
  contact: {
    error: null,
    isFetching: false,
    data: {},
    create: {
      isFetching: false,
      error:null,
      completed: false
    },
    update: {
      isFetching: false,
      error: null,
      completed: false
    },
    delete: {
      isFetching: false,
      error: null,
      completed: false
    }
  }
}

const cleanContact = (contacts: any) => {
  contacts.contact = initialState.contact
}
const getContactInfoStart = (
  contacts: any,
  action: PayloadAction<{ id: string }>
) => {
  contacts.contact.isFetching = true
}

const getContactInfoComplete = (
  contacts: any,
  action: PayloadAction<{ data: {} }>
) => {
  contacts.contact.isFetching = false
  contacts.contact.data = action.payload.data
}

const getContactInfoError = (
  contacts: any,
  action: PayloadAction<{ error: string }>
) => {
  contacts.contact.isFetching = false
  contacts.contact.error = action.payload.error
}

const getListOfContactsStart = (
  contacts: any,
  action: PayloadAction<{ currentPage: number }>
) => {
  contacts.list.isFetching = true
}

const getListOfContactsComplete = (
  contacts: any,
  action: PayloadAction<{ data: [] }>
) => {
  contacts.list.isFetching = false
  contacts.list.data = action.payload.data
}
const getListOfContactsError = (
  contacts: any,
  action: PayloadAction<{ error: string }>
) => {
  contacts.list.isFetching = false
  contacts.list.data = []
  contacts.list.error = action.payload.error
}

const deleteContactStart = (
  contacts: any,
  action: PayloadAction<{ id: string }>
) => {
  contacts.contact.delete.isFetching = true
}

const deleteContactComplete = (contacts: any) => {
  contacts.contact.delete.isFetching = false
  contacts.contact.delete.completed = true
  contacts.contact.delete.error = null
}
const deleteContactError = (
  contacts: any,
  action: PayloadAction<{ error: string }>
) => {
  contacts.contact.delete.isFetching = false
  contacts.contact.delete.completed = true
  contacts.contact.delete.error = action.payload.error
}

const createContactStart = (
  contacts: any,
  action: PayloadAction<{
    firstName: string
    lastName: string
    email: string
    phone: string
  }>
) => {
  contacts.contact.create.isFetching = true
  contacts.contact.create.completed = false
}
const createContactComplete = (contacts: any) => {
  contacts.contact.create.isFetching = false
  contacts.contact.create.completed = true
  contacts.contact.create.error = null
}
const createContactError = (
  contacts: any,
  action: PayloadAction<{
    error: string
  }>
) => {
  contacts.contact.create.isFetching = false
  contacts.contact.create.completed = true
  contacts.contact.create.error = action.payload.error
}

const updateContactStart = (
  contacts: any,
  action: PayloadAction<{
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
  }>
) => {
  contacts.contact.create.isFetching = true
  contacts.contact.create.completed = false
}
const updateContactComplete = (contacts: any) => {
  contacts.contact.update.isFetching = false
  contacts.contact.update.completed = true
  contacts.contact.update.error = null
}
const updateContactError = (
  contacts: any,
  action: PayloadAction<{
    error: string
  }>
) => {
  contacts.contact.update.isFetching = false
  contacts.contact.update.completed = true
  contacts.contact.update.error = action.payload.error
}
const moviesSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getListOfContactsStart,
    getListOfContactsComplete,
    getListOfContactsError,
    getContactInfoStart,
    getContactInfoComplete,
    getContactInfoError,
    deleteContactStart,
    deleteContactComplete,
    deleteContactError,
    createContactStart,
    createContactComplete,
    createContactError,
    updateContactStart,
    updateContactComplete,
    updateContactError,
    cleanContact
  }
})
export const { actions, reducer } = moviesSlice
