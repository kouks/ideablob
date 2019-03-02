import { Storage } from '@exteranto/api'
import { Listener, WiredWith } from '@exteranto/core'

export class ClearsLocalStorage implements Listener {

  /**
   * Local storage.
   */
  @WiredWith(['local'])
  private storage: Storage

  /**
   * Clear local storage on update.
   */
  public handle () : void {
    this.storage.clear()
  }

}
