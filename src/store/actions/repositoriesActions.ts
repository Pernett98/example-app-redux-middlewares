import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORY,
  RepositoryActionTypes,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAILED,
  UPDATE_USERNAME,
  FETCHING_REPOSITORIES,
} from './repositoriesActionsTypes'
import { Repository } from '../../models/Reposotory'

type RepositoriesAction<T = any> = (payload?: T) => RepositoryActionTypes

export const fetchRepositories: RepositoriesAction<string> = username => ({
  type: FETCH_REPOSITORIES,
  payload: username,
})

export const fetchingRepositories: RepositoriesAction = () => ({
  type: FETCHING_REPOSITORIES,
})

export const fetchRepositoriesSuccess: RepositoriesAction<Repository[]> = repositories => ({
  type: FETCH_REPOSITORIES_SUCCESS,
  payload: repositories,
})

export const fetchRepositoriesFailed: RepositoriesAction<Error> = error => ({
  type: FETCH_REPOSITORIES_FAILED,
  payload: error,
})

export const fetchRepository: RepositoriesAction<string> = repositoryId => ({
  type: FETCH_REPOSITORY,
  payload: repositoryId,
})

export const updateUsername: RepositoriesAction<string> = username => ({
  type: UPDATE_USERNAME,
  payload: username,
})
