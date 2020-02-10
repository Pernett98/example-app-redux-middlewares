import { Repository } from '../../models/Repository'
import GithubApi from '../githubServices'

type GithubApiType = typeof GithubApi
type GithubApiStub = (overloads?: Partial<GithubApiType>) => GithubApiType

export const createGithubApiStub: GithubApiStub = overloads => ({
  getRepositories:
    overloads?.getRepositories || (() => Promise.resolve<Repository[]>([])),
})
