import { Epic, ofType } from 'redux-observable'
import { from, of, concat } from 'rxjs'
import { map, switchMap, takeUntil, catchError } from 'rxjs/operators'

import {
  RepositoryActionTypes,
  FETCH_REPOSITORIES,
} from '../store/actions/repositoriesActionsTypes'
import { Apis, RootState } from '../store'
import {
  fetchingRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesFailed,
} from '../store/actions/repositoriesActions'

const onRepositoriesError = (error: Error) => of(fetchRepositoriesFailed(error))

export const fetchRepositoriesEpic: Epic<
  RepositoryActionTypes,
  RepositoryActionTypes,
  RootState,
  Apis
> = (action$, state$, { GithubApi }) =>
  action$.ofType(FETCH_REPOSITORIES).pipe(
    switchMap(() =>
      concat(
        of(fetchingRepositories()),
        from(
          GithubApi.getRepositories(state$.value.repositories.username || ''),
        ).pipe(
          map(repositories => fetchRepositoriesSuccess(repositories)),
          catchError(onRepositoriesError),
          takeUntil(action$.pipe(ofType(''))),
        ),
      ),
    ),
  )
