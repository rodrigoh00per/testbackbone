import { configureStore, $CombinedState } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { reducers as rootReducer } from './root-reducer'
import { Store } from 'redux'
import rootSaga from './root-saga'
import { loadState, } from '../utils/localStorage/localStorage'

const preloadedState = loadState()

const sagaMiddleware = createSagaMiddleware()

const store: Store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: true,
  preloadedState
})



sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState> & {
  readonly [$CombinedState]?: undefined
}

export default store
