/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { Provider, connect } from 'react-redux'
import { SafeAreaView, StatusBar, Button } from 'react-native'

import { store } from './src/store'

import RepositoryListContainer from './src/containers/RepositoryList/RepositoryListContainer'
import RepositorySearchContainer from './src/containers/RepositorySearch/RepositorySearchContainer'
import { Loading } from './src/components/Loading/Loading'
import { fetchRepositoriesActions } from './src/store/actions'
import { fetchRepositoriesThunk } from './src/thunks/repositoriesThunks'

// store.dispatch(fetchRepositoriesThunk('pernett98'));

declare let global: { HermesInternal: null | {} }

const LoadingContainer = connect(s => ({
  loading: s.repositories.loadingRepositories,
}))(Loading)
const App = () => {
  return (
    <Provider store={store}>
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <RepositorySearchContainer />
          <Button
            title="find"
            onPress={() =>
              store.dispatch(
                fetchRepositoriesActions.request(),
                // fetchRepositoriesThunk()
              )
            }
          />
          <LoadingContainer />
          <RepositoryListContainer />
        </SafeAreaView>
      </>
    </Provider>
  )
}

export default App
