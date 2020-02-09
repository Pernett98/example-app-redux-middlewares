import { RootState } from '../store'
import { get } from 'lodash'

export const getUsername = (state: RootState) =>
  get(state, 'repositories.username', '') as string
export const getRepositories = (state: RootState) =>
  state.repositories.repositories
