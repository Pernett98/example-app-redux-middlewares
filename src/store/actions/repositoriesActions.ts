import { createAction, createAsyncAction, ActionType } from 'typesafe-actions'

import { Repository } from '../../models/Repository'

export const fetchRepositoriesActions = createAsyncAction(
  'FETCH_REPOSITORIES_REQUEST',
  'FETCH_REPOSITORIES_SUCCESS',
  'FETCH_REPOSITORIES_FAILURE',
  'FETCH_REPOSITORIES_CANCEL',
)<undefined, Repository[], Error>()

export const fetchRepositoriesLoading = createAction(
  'FETCH_REPOSITORIES_LOADING',
)()

export const updateUsername = createAction('UPDATE_USERNAME')<string>()

export type FetchRepositoriesRequest = ActionType<
  typeof fetchRepositoriesActions.request
>

export type FetchRepositoriesSuccess = ActionType<
  typeof fetchRepositoriesActions.success
>

export type FetchRepositoriesFailure = ActionType<
  typeof fetchRepositoriesActions.failure
>

export type FetchRepositoriesCancel = ActionType<
  typeof fetchRepositoriesActions.cancel
>

export type UpdateUsername = ActionType<typeof updateUsername>

export type FetchingRepositories = ActionType<typeof fetchRepositoriesLoading>

export type RepositoryActionTypes =
  | ActionType<typeof fetchRepositoriesActions>
  | FetchingRepositories
  | UpdateUsername
