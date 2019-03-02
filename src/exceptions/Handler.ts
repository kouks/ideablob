import { Log } from '@/helpers'
import { Listener } from '@exteranto/core'
import { Exception } from '@exteranto/exceptions'

export class Handler implements Listener {

  /**
   * Generic exception listener, simply rethrows the exception.
   *
   * @param e The thrown exception
   * @throws {Exception}
   */
  public handle (e: Exception) : void {
    Log.error(e)
  }

}
