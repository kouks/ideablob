import { Listener, Param, Autowired } from '@exteranto/core'
import { ContextMenus, ContextMenuItemConfiguration } from '@/services/contextMenus'
import { SavePageMenuItemClickedEvent } from '../events/SavePageMenuItemClickedEvent'

export class CustomizesContextMenus implements Listener {

  /**
   * The context menus configuration.
   */
  @Param('contextMenus')
  private menus: {
    savePage: ContextMenuItemConfiguration,
  }

  /**
   * The context menus API service.
   */
  @Autowired
  private contextMenus: ContextMenus

  /**
   * Handle the fired event.
   */
  public handle () : void {
    // Create a context menu to save an item to Ideablob.
    this.contextMenus.addItem({
      ...this.menus.savePage,
      event: SavePageMenuItemClickedEvent,
    })
  }

}
