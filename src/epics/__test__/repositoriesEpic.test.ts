import { ActionsObservable, StateObservable } from 'redux-observable'
import { hot, cold } from 'jest-marbles'

import { createGithubApiStub } from './../../services/__test__/githubServiceStub'
import {
  fetchRepositoriesActions,
  fetchRepositoriesLoading,
} from './../../store/actions/repositoriesActions'
import { fetchRepositoriesEpic } from './../repositoriesEpic'

describe('repositoriesEpic', () => {
  describe('fetchRepositoriesEpic', () => {
    it('should call success action', async () => {
      expect.assertions(2)
      const action$ = ActionsObservable.of(fetchRepositoriesActions.request())
      const state$ = StateObservable.create()

      const GithubApi = createGithubApiStub({
        getRepositories: jest.fn().mockResolvedValue([]),
      })
      const epic$ = fetchRepositoriesEpic(action$, state$, { GithubApi })
      const result = await epic$.toPromise()
      expect(GithubApi.getRepositories).toHaveBeenCalled()
      expect(result).toMatchObject(fetchRepositoriesActions.success([]))
    })
    it('should call failure action', async () => {
      expect.assertions(2)
      const action$ = ActionsObservable.of(fetchRepositoriesActions.request())
      const state$ = StateObservable.create()

      const GithubApi = createGithubApiStub({
        getRepositories: jest.fn().mockRejectedValue(new Error()),
      })
      const epic$ = fetchRepositoriesEpic(action$, state$, { GithubApi })
      const result = await epic$.toPromise()
      expect(GithubApi.getRepositories).toHaveBeenCalled()
      expect(result).toMatchObject(
        fetchRepositoriesActions.failure(new Error()),
      )
    })
  })
})

describe('using marbles', () => {
  it.skip('should work', () => {
    expect.assertions(2)

    const action$ = hot('-a', {
      a: fetchRepositoriesActions.request(),
    })
    const state$ = StateObservable.create()
    const GithubApi = createGithubApiStub({
      getRepositories: jest.fn().mockResolvedValue([]),
    })
    const expected = cold('-b--------------------c', {
      b: fetchRepositoriesLoading(),
      c: fetchRepositoriesActions.success([]),
    })
    expect(
      fetchRepositoriesEpic(action$, state$, { GithubApi }),
    ).toBeObservable(expected)
  })
})
