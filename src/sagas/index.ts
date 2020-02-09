import { watchFetchRepositoriesSaga } from './repositoriesSagas'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([watchFetchRepositoriesSaga()])
}
