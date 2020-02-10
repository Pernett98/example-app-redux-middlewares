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
import { Provider } from 'react-redux'
import { SafeAreaView, StatusBar, Button, View } from 'react-native'

import { store } from './src/store'

import RepositoryListContainer from './src/containers/RepositoryList/RepositoryListContainer'
import RepositorySearchContainer from './src/containers/RepositorySearch/RepositorySearchContainer'
import { fetchRepositoriesActions } from './src/store/actions'
import { fetchRepositoriesThunk } from './src/thunks/repositoriesThunks'
import { LoadingContainer } from './src/containers/LoadingContainer'
import FetchRespositoriesContainer from './src/containers/FetchRespositoriesContainer'

declare let global: { HermesInternal: null | {} }

const App = () => {
  return (
    <Provider store={store}>
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={{ paddingHorizontal: 5 }}>
            <RepositorySearchContainer title="Github username:" />
            <FetchRespositoriesContainer />
          </View>
          <LoadingContainer />
          <RepositoryListContainer />
        </SafeAreaView>
      </>
    </Provider>
  )
}

export default App
