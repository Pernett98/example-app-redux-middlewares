import { Epic } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  map,
  switchMap,
  takeUntil,
  catchError,
  filter,
  startWith,
} from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'

import { Apis, RootState } from '../store'
import { getUsername } from './../selectors/repositorySelectors'
import {
  RepositoryActionTypes,
  fetchRepositoriesActions,
  fetchRepositoriesLoading,
} from '../store/actions'

type FetchRepositoriesEpic = Epic<
  RepositoryActionTypes,
  RepositoryActionTypes,
  RootState,
  Apis
>
export const fetchRepositoriesEpic: FetchRepositoriesEpic = (
  action$,
  state$,
  { GithubApi },
) =>
  action$.pipe(
    filter(isActionOf(fetchRepositoriesActions.request)),
    switchMap(() =>
      from(GithubApi.getRepositories(getUsername(state$.value))).pipe(
        map(repositories => fetchRepositoriesActions.success(repositories)),
        catchError(error => of(fetchRepositoriesActions.failure(error))),
        takeUntil(
          action$.pipe(filter(isActionOf(fetchRepositoriesActions.cancel))),
        ),
        startWith(fetchRepositoriesLoading()),
      ),
    ),
  )
