import { getUsername } from './../selectors/repositorySelectors'
import { Apis, RootState } from '../store'
import { RepositoryActionTypes } from '../store/actions/repositoriesActionsTypes'
import {
  fetchRepositoriesSuccess,
  fetchRepositoriesFailed,
  fetchingRepositories,
} from '../store/actions/repositoriesActions'
import { ThunkAction } from 'redux-thunk'
import { ActionCreator } from 'redux'

export const fetchRepositoriesThunk: ActionCreator<ThunkAction<
  Promise<RepositoryActionTypes>,
  RootState,
  Apis,
  RepositoryActionTypes
>> = () => (dispatch, getState, { GithubApi }) => {
  dispatch(fetchingRepositories())
  return GithubApi.getRepositories(getUsername(getState()))
    .then(repositories => dispatch(fetchRepositoriesSuccess(repositories)))
    .catch(err => dispatch(fetchRepositoriesFailed(err)))
}
