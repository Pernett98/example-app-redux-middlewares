import { Action } from '../../typeUtils/Action'
import { Repository } from '../../models/Reposotory'

export const FETCH_REPOSITORIES = 'FETCH_REPOSITORIES'
export const FETCHING_REPOSITORIES = 'FETCHING_REPOSITORIES'
export const FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS'
export const FETCH_REPOSITORIES_FAILED = 'FETCH_REPOSITORIES_FAILED'

export const FETCH_REPOSITORY = 'FETCH_REPOSITORY'
export const FETCH_REPOSITORY_SUCCESS = 'FETCH_REPOSITORY_SUCCESS'
export const FETCH_REPOSITORY_FAILED = 'FETCH_REPOSITORY_FAILED'

export const UPDATE_USERNAME = 'UPDATE_USERNAME'

export type FetchRepositories = Action<typeof FETCH_REPOSITORIES, string>
export type FetchingRepositories = Action<typeof FETCHING_REPOSITORIES>
export type FetchRepositoriesSuccess = Action<
  typeof FETCH_REPOSITORIES_SUCCESS,
  Repository[]
>
export type FetchRepositoriesFailed = Action<
  typeof FETCH_REPOSITORIES_FAILED,
  Error
>

export type FetchRepository = Action<typeof FETCH_REPOSITORY, string>
export type FetchRepositorySuccess = Action<
  typeof FETCH_REPOSITORY_SUCCESS,
  Repository
>
export type FetchRepositoryFailed = Action<
  typeof FETCH_REPOSITORY_FAILED,
  Error
>
export type UpdateUsername = Action<typeof UPDATE_USERNAME, string>

export type RepositoryActionTypes =
  | FetchRepositories
  | FetchRepositoriesSuccess
  | FetchRepositoriesFailed
  | FetchRepository
  | FetchRepositorySuccess
  | FetchRepositoryFailed
  | UpdateUsername
  | FetchingRepositories
