import { createReducer } from '@reduxjs/toolkit'

import {
  FetchRepositoriesFailed,
  UpdateUsername,
  FetchingRepositories,
} from './../actions/repositoriesActionsTypes'
import { Repository } from '../../models/Reposotory'
import { FetchRepositoriesSuccess } from '../actions/repositoriesActionsTypes'

interface RepositoriesState {
  repositories?: Repository[]
  loadingRepositories: boolean
  error?: Error
  username?: string
}

type ReducerFunction<S, A> = (state: S, action: A) => S
type RepositoriesReducer<A> = ReducerFunction<RepositoriesState, A>

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

const fetchRepositoriesFailed: RepositoriesReducer<FetchRepositoriesFailed> = (
  state,
  action,
) => ({
  ...state,
  error: action.payload,
  loadingRepositories: false,
})

const updateUsername: RepositoriesReducer<UpdateUsername> = (
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

export const repositoriesReducer = createReducer<RepositoriesState>(
  initialState,
  {
    FETCH_REPOSITORIES_SUCCESS: fetchRepositoriesSuccess,
    FETCH_REPOSITORIES_FAILED: fetchRepositoriesFailed,
    UPDATE_USERNAME: updateUsername,
    FETCHING_REPOSITORIES: fetchingRepositories,
  },
)
