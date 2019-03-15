import { Provider, Script } from '@exteranto/core'

export class ResourceManagerProvider extends Provider {

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
    //
  }

  /**
   * {@inheritdoc}
   */
  public register () : void {
    //
  }

}
