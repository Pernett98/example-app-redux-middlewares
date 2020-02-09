import { Epic } from 'redux-observable'
import { from, of, concat } from 'rxjs'
import { map, switchMap, takeUntil, catchError, filter } from 'rxjs/operators'

import { Apis, RootState } from '../store'
import {
  RepositoryActionTypes,
  fetchRepositoriesActions,
  fetchRepositoriesLoading,
} from '../store/actions'
import { isActionOf } from 'typesafe-actions'

export const fetchRepositoriesEpic: Epic<
  RepositoryActionTypes,
  RepositoryActionTypes,
  RootState,
  Apis
> = (action$, state$, { GithubApi }) =>
  action$.pipe(
    filter(isActionOf(fetchRepositoriesActions.request)),
    switchMap(() =>
      concat(
        of(fetchRepositoriesLoading()),
        from(
          GithubApi.getRepositories(state$.value.repositories.username || ''),
        ).pipe(
          map(repositories => fetchRepositoriesActions.success(repositories)),
          catchError(error => of(fetchRepositoriesActions.failure(error))),
          takeUntil(
            action$.pipe(filter(isActionOf(fetchRepositoriesActions.cancel))),
          ),
        ),
      ),
    ),
  )
