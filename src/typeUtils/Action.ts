import { Action as ReduxAction } from 'redux'

export type Action<T, P = any> = ReduxAction<T> & { payload?: P }
