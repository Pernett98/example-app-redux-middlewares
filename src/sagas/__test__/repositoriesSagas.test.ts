import { createGithubApiStub } from './../../services/__test__/githubServiceStub'
import { getUsername } from './../../selectors/repositorySelectors'
import {
  fetchRepositoriesLoading,
  fetchRepositoriesActions,
} from './../../store/actions/repositoriesActions'
import { expectSaga } from 'redux-saga-test-plan'

import { handleFetchRepositoriesSaga } from '../repositoriesSagas'
import { getContext } from 'redux-saga-test-plan/matchers'

describe('repositoriesSagas', () => {
  describe('fetchRepositoriesSaga', () => {
    it('happy path - integration test', () => {
      const GithubApi = createGithubApiStub({
        getRepositories: jest.fn().mockResolvedValue([]),
      })
      return expectSaga(handleFetchRepositoriesSaga)
        .put(fetchRepositoriesLoading())
        .select(getUsername)
        .provide([[getContext('GithubApi'), GithubApi]])
        .getContext('GithubApi')
        .put(fetchRepositoriesActions.success([]))
        .run()
    })
    it('bad path - integration test', () => {
      const GithubApi = createGithubApiStub({
        getRepositories: jest.fn().mockRejectedValue(new Error()),
      })
      return expectSaga(handleFetchRepositoriesSaga)
        .put(fetchRepositoriesLoading())
        .select(getUsername)
        .provide([[getContext('GithubApi'), GithubApi]])
        .getContext('GithubApi')
        .put(fetchRepositoriesActions.failure(new Error()))
        .run()
    })
  })
})
