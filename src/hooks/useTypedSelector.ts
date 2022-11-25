import { TypedUseSelectorHook, useSelector as _useSelector } from 'react-redux'
import { RootState } from '../redux/store'


export const useSelector: TypedUseSelectorHook<RootState> = _useSelector
