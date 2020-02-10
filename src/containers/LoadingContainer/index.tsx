import { connect } from 'react-redux'
import { Loading } from '../../components/Loading/Loading'
import { RootState } from 'src/store'

export const LoadingContainer = connect<
  { loading?: boolean },
  {},
  {},
  RootState
>(s => ({
  loading: s.repositories.loadingRepositories,
}))(Loading)
