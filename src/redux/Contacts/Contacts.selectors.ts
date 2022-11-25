import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ContactsState } from './Contacts.slice'

export const selectContacts = (state: RootState) => state.contacts

export const selectContactsList = createSelector(
  [selectContacts],
  (contacts: ContactsState) => contacts.list
)
export const selectContact = createSelector(
  [selectContacts],
  (contacts: ContactsState) => contacts.contact
)

export const selectContactData = createSelector(
  [selectContact],
  contact => contact.data
)
export const selectContactDelete = createSelector(
  [selectContact],
  contact => contact.delete
)
export const selectIsDeleting = createSelector(
  [selectContactDelete],
  deleteEl => {
    return deleteEl.isFetching
  }
)

export const selectWasDeletedSuccesfull = createSelector(
  [selectContactDelete],
  deleteEl => deleteEl.completed
)
export const selectDeleteError = createSelector(
  [selectContactDelete],
  deleteEl => deleteEl.error
)

export const selectContactsListData = createSelector(
  [selectContactsList],
  list =>
    Object.keys(list?.data).length === 0
      ? {
          count: 0,
          currentPage: 0,
          perPage: 0,
          results: [],
          totalPages: 0
        }
      : list.data
)
export const selectUpdate = createSelector(
  [selectContact],
  contact => contact.update
)
export const selectIsUpdatingContact = createSelector(
  [selectUpdate],
  update => update.isFetching
)

export const selectUpdateError = createSelector(
  [selectUpdate],
  update => update.error
)

export const selectUpdateCompleted = createSelector(
  [selectUpdate],
  update => update.completed
)
export const selectCreate = createSelector(
  [selectContact],
  contact => contact.create
)
export const selectIsCreatingContact = createSelector(
  [selectCreate],
  create => create.isFetching
)
export const selectCreateError = createSelector(
  [selectCreate],
  create => create.error
)
export const selectCreateCompleted = createSelector(
  [selectCreate],
  create => create.completed
)

export const selectErrorOfUpdateCreate = (id: string | undefined) =>
  createSelector(
    [selectCreateError, selectUpdateError],
    (errorCreate, errorUpdate) => {
      if (id) return errorUpdate
      else return errorCreate
    }
  )

export const selectInProgressUpdateCreate = (id: string | undefined) =>
  createSelector(
    [selectIsCreatingContact, selectIsUpdatingContact],
    (isCreating, isUpdating) => {
      if (id) return isUpdating
      else return isCreating
    }
  )

export const selectIsCompletedUpdateCreate = (id: string | undefined) =>
  createSelector(
    [selectCreateCompleted, selectUpdateCompleted],
    (createCompleted, updateCompleted) => {
      if (id) return updateCompleted
      else return createCompleted
    }
  )
