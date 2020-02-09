import { from } from 'rxjs'
import { delay } from 'rxjs/operators'

export function fakeDelay<T>(promise: Promise<T>, time: number) {
  return from(promise)
    .pipe(delay(time))
    .toPromise()
}
