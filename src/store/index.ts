import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'

import { getRepositories } from '../services/githubServices'
import { configureEpicMiddleware } from '../epics'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const apis = { GithubApi: { getRepositories } }

export type Apis = typeof apis
export type RootState = ReturnType<typeof rootReducer>

const { epicMiddleware, runEpicMiddleware } = configureEpicMiddleware(apis)

const sagaMiddleware = createSagaMiddleware({
  context: apis,
})

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(apis), epicMiddleware),
  ),
)

runEpicMiddleware()
