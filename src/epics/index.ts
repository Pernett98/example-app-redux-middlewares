import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { fetchRepositoriesEpic } from './repositoriesEpic'

const rootEpic = combineEpics(fetchRepositoriesEpic)

export function configureEpicMiddleware<D>(dependencies: D) {
  const epicMiddleware = createEpicMiddleware({
    dependencies,
  })
  const runEpicMiddleware = () => epicMiddleware.run(rootEpic)
  return {
    epicMiddleware,
    runEpicMiddleware: runEpicMiddleware,
  }
}
