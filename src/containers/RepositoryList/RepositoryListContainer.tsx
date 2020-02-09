import { connect } from 'react-redux'
import RepositoryList from '../../components/RepositoryList/RepositoryList'
import { RootState } from '../../store'

const mapStateToProps = (state: RootState) => ({
  repositories: state.repositories.repositories,
})

export default connect(mapStateToProps)(RepositoryList)
