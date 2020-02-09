import { FETCH_REPOSITORIES } from './../store/actions/repositoriesActionsTypes'
import {
  fetchRepositoriesSuccess,
  fetchRepositoriesFailed,
} from './../store/actions/repositoriesActions'
import { getUsername } from './../selectors/repositorySelectors'
import { Saga } from 'redux-saga'
import { call, getContext, select, put, takeLatest } from 'redux-saga/effects'

const handleFetchRepositoriesSaga = function*(action) {
  try {
    const username = yield select(getUsername)
    const GithubApi = yield getContext('GithubApi')
    const repositories = yield call(GithubApi.getRepositories, username)
    yield put(fetchRepositoriesSuccess(repositories))
  } catch (error) {
    yield put(fetchRepositoriesFailed(error))
  }
}

export const watchFetchRepositoriesSaga: Saga<any> = function*() {
  yield takeLatest(FETCH_REPOSITORIES, handleFetchRepositoriesSaga)
}
