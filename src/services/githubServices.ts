import axios from 'axios'
import { map } from 'lodash'
import { Repository } from '../models/Repository'
import { fakeDelay } from './fakeTimer'

const githubClient = axios.create({
  baseURL: 'https://api.github.com/',
})

const _getRepositories = (username: string) =>
  githubClient
    .get(`users/${username}/repos`)
    .then(response => response.data)
    .then(data =>
      map<any, Repository>(data, repository => ({
        name: repository.name,
        starts: repository.stargazers_count,
        language: repository.language,
      })),
    )

export const getRepositories: typeof _getRepositories = (username: string) =>
  fakeDelay(_getRepositories(username), 15000)

const GithubApi = {
  getRepositories,
}
export default GithubApi
