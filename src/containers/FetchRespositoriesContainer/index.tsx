import React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Button } from 'react-native'

import {
  fetchRepositoriesActions,
  RepositoryActionTypes,
} from '../../store/actions'
import { fetchRepositoriesThunk } from '../../thunks/repositoriesThunks'
import { RootState, Apis } from '../../store'

type FetchRepositoriesContainerProps = {
  dispatch: ThunkDispatch<RootState, Apis, RepositoryActionTypes>
}

const FetchRepositoriesContainer: React.FC<FetchRepositoriesContainerProps> = ({
  dispatch,
}) => (
  <Button
    title="Find"
    onPress={() =>
      dispatch(
        //TODO: change
        fetchRepositoriesActions.request(),
        // fetchRepositoriesThunk(),
      )
    }
  />
)

export default connect()(FetchRepositoriesContainer)
