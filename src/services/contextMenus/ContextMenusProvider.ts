import { ContextMenus } from './ContextMenus'
import { Provider, Script } from '@exteranto/core'

export class ContextMenusProvider extends Provider {

  /**
   * {@inheritdoc}
   */
  public only () : Script[] {
    return [Script.BACKGROUND]
  }

  /**
   * {@inheritdoc}
   */
  public boot () : void {
    this.container.bind(ContextMenus).toSelf()
  }

  /**
   * {@inheritdoc}
   */
  public register () : void {
    //
  }

}
