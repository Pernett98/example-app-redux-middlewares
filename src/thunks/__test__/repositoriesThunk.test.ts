import configureStore from 'redux-mock-store'

import { fetchRepositoriesActions } from './../../store/actions/repositoriesActions'
import { RootState } from './../../store'
import { createGithubApiStub } from '../../services/__test__/githubServiceStub'
import { fetchRepositoriesThunk } from './../repositoriesThunks'

describe('repositoriesThunks', () => {
  const mockStore = configureStore<RootState>()
  describe('fetchRepositoriesThunk', () => {
    it('should resolve correctly', async () => {
      expect.assertions(2)
      const store = mockStore()
      const dispatchSpy = jest.spyOn(store, 'dispatch')
      const GithubApi = createGithubApiStub()

      await fetchRepositoriesThunk()(store.dispatch, store.getState, {
        GithubApi,
      })
      expect(dispatchSpy).toHaveBeenCalledTimes(2)
      expect(dispatchSpy).toHaveBeenLastCalledWith(
        fetchRepositoriesActions.success([]),
      )
    })
    it('should dispatch failure action on rejects', async () => {
      expect.assertions(2)
      const store = mockStore()
      const dispatchSpy = jest.spyOn(store, 'dispatch')
      const GithubApi = createGithubApiStub({
        getRepositories: jest.fn().mockRejectedValue(new Error()),
      })

      await fetchRepositoriesThunk()(store.dispatch, store.getState, {
        GithubApi,
      })
      expect(dispatchSpy).toHaveBeenCalledTimes(2)
      expect(dispatchSpy).toHaveBeenLastCalledWith(
        fetchRepositoriesActions.failure(new Error()),
      )
    })
  })
})
