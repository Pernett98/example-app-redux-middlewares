import { connect } from 'react-redux'

import Search from '../../components/Search/Search'
import { updateUsername } from '../../store/actions/repositoriesActions'

const mapStateToProps = state => ({ text: state.repositories.username })
const mapDispatchToProps = dispatch => ({
  onChangeText: (text: string) => dispatch(updateUsername(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
