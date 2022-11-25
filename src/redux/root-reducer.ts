import { $CombinedState, combineReducers } from 'redux'
import { reducer as contactsReducer } from './Contacts/Contacts.slice'

export const reducers = combineReducers({
  contacts: contactsReducer
})

export type RootState = ReturnType<typeof reducers> & {
  readonly [$CombinedState]?: undefined
}
