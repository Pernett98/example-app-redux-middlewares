import { getUsername, getRepositories } from './../repositorySelectors'

describe('repositoriesSelectors', () => {
  it('getUsername', () => {
    const username = getUsername({ repositories: { username: 'test' } })
    expect(username).toBe('test')
  })
  it('getRepositories', () => {
    const repositories = getRepositories({ repositories: { repositories: [] } })
    expect(repositories).toEqual([])
  })
})
