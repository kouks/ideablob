import { Listener } from '@exteranto/core'
import { Blob, Blobs } from '@/resources/Blobs'
import { ResourceManager } from '@/services/resourceManager'
import { Manager } from '@/services/resourceManager/annotations'
import { SavePageMenuItemClickedEvent } from '../events/SavePageMenuItemClickedEvent'

export class SharesPage implements Listener {

  /**
   * The context menus API service.
   */
  @Manager<Blob>(Blobs)
  private manager: ResourceManager<Blob>

  /**
   * Handle the fired event.
   */
  public handle (event: SavePageMenuItemClickedEvent) : void {
    this.manager.store({ url: event.page })
  }

}
