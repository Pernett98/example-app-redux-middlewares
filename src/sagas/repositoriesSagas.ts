import { fetchRepositoriesLoading } from './../store/actions/repositoriesActions'
import { Saga } from 'redux-saga'
import { call, getContext, select, put, takeLatest } from 'redux-saga/effects'

import { Repository } from './../models/Repository'
import { fetchRepositoriesActions } from './../store/actions'
import { getUsername } from './../selectors/repositorySelectors'

const handleFetchRepositoriesSaga = function*() {
  try {
    yield put(fetchRepositoriesLoading())
    const username: string = yield select(getUsername)
    const GithubApi = yield getContext('GithubApi')
    const repositories: Repository[] = yield call(
      GithubApi.getRepositories,
      username,
    )
    yield put(fetchRepositoriesActions.success(repositories))
  } catch (error) {
    yield put(fetchRepositoriesActions.failure(error))
  }
}

export const watchFetchRepositoriesSaga: Saga<any> = function*() {
  yield takeLatest(
    fetchRepositoriesActions.request,
    handleFetchRepositoriesSaga,
  )
}
