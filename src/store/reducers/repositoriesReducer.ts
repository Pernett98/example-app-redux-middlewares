import { createReducer, Reducer } from 'typesafe-actions'

import { Repository } from '../../models/Repository'
import {
  RepositoryActionTypes,
  fetchRepositoriesActions,
  FetchRepositoriesSuccess,
  FetchRepositoriesFailure,
  UpdateUsername,
  updateUsername,
  FetchingRepositories,
  fetchRepositoriesLoading,
} from '../actions/repositoriesActions'

interface RepositoriesState {
  repositories?: Repository[]
  loadingRepositories?: boolean
  error?: Error
  username?: string
}

type RepositoriesReducer<A extends RepositoryActionTypes> = Reducer<
  RepositoriesState,
  A
>

const initialState: RepositoriesState = {
  username: '',
  repositories: [],
  error: undefined,
  loadingRepositories: false,
}

const fetchRepositoriesSuccess: RepositoriesReducer<FetchRepositoriesSuccess> = (
  state,
  action,
) => ({
  ...state,
  repositories: action.payload,
  loadingRepositories: false,
})

const fetchRepositoriesFailure: RepositoriesReducer<FetchRepositoriesFailure> = (
  state,
  action,
) => ({
  ...state,
  error: action.payload,
  loadingRepositories: false,
})

const updateUsernameReducer: RepositoriesReducer<UpdateUsername> = (
  state,
  action,
) => ({
  ...state,
  username: action.payload,
})

const fetchingRepositories: RepositoriesReducer<FetchingRepositories> = (
  state,
  _,
) => ({
  ...state,
  loadingRepositories: true,
})

export const repositoriesReducer = createReducer<
  RepositoriesState,
  RepositoryActionTypes
>(initialState)
  .handleAction(fetchRepositoriesActions.success, fetchRepositoriesSuccess)
  .handleAction(fetchRepositoriesActions.failure, fetchRepositoriesFailure)
  .handleAction(updateUsername, updateUsernameReducer)
  .handleAction(fetchRepositoriesLoading, fetchingRepositories)
