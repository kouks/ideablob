import { ContextMenus } from '@/services/contextMenus'
import { Listener, Param, Autowired } from '@exteranto/core'
import { SavePageMenuItemClickedEvent } from '../events/SavePageMenuItemClickedEvent'

export class CustomizesContextMenus implements Listener {

  /**
   * The ID to use for all the context menu items.
   */
  @Param('contextMenuIds')
  private contextMenuIds: {
    savePage: string,
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
      id: this.contextMenuIds.savePage,
      title: 'Save page to Ideablob',
      event: SavePageMenuItemClickedEvent,
    })
  }

}
