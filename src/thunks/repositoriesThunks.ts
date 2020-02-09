import { ThunkAction } from 'redux-thunk'
import { ActionCreator } from 'redux'

import {
  RepositoryActionTypes,
  fetchRepositoriesActions,
} from '../store/actions'
import { fetchRepositoriesLoading } from './../store/actions/repositoriesActions'
import { getUsername } from './../selectors/repositorySelectors'
import { Apis, RootState } from '../store'

export const fetchRepositoriesThunk: ActionCreator<ThunkAction<
  Promise<RepositoryActionTypes>,
  RootState,
  Apis,
  RepositoryActionTypes
>> = () => (dispatch, getState, { GithubApi }) => {
  dispatch(fetchRepositoriesLoading())
  return GithubApi.getRepositories(getUsername(getState()))
    .then(repositories =>
      dispatch(fetchRepositoriesActions.success(repositories)),
    )
    .catch(err => dispatch(fetchRepositoriesActions.failure(err)))
}
