import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { StateType } from 'typesafe-actions'

import rootReducer from './reducers/rootReducer'

import { getRepositories } from '../services/githubServices'
import { configureEpicMiddleware } from '../epics'
import rootSaga from '../sagas'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const apis = { GithubApi: { getRepositories } }

export type Apis = typeof apis
export type RootState = StateType<typeof rootReducer>

const { epicMiddleware, runEpicMiddleware } = configureEpicMiddleware(apis)

const sagaMiddleware = createSagaMiddleware({
  context: apis,
})

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(
    applyMiddleware(
      //TODO: change the middleware to use it
      // thunk.withExtraArgument(apis),
      epicMiddleware,
      // sagaMiddleware,
    ),
  ),
)
//TODO: change the middleware to use it
// sagaMiddleware.run(rootSaga)
runEpicMiddleware()
