# PoC - Redux Middlewares (`redux-sagas`, `redux-thunk`, `redux-observable`)

This is a proof of concept using different middlewares to handle async tasks.

In order to change the middleware you need to search this
comment `//TODO: change the middleware to use it` and change it manually e.g:

`src/store/index.ts`

```ts
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
```
