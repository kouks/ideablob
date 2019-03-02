import { ContextMenuItemClickedEvent } from './events'
import { Autowired, Dispatcher } from '@exteranto/core'
import { ContextMenuItemCreatinonFailedException } from './exceptions'
import { ContextMenuItemConfiguration, ContextMenuItemClickedEventInfo } from './types'

// TODO: Consider item models, like tabs.
// TODO: Types for item and tab.
export class ContextMenus {

  /**
   * The event dispatcher implementation.
   */
  @Autowired
  private dispatcher: Dispatcher

  /**
   * Adds an item to context menus in the browser.
   *
   * @param configuration The configuration to be used to create the menu item
   */
  public async addItem (configuration: ContextMenuItemConfiguration) : Promise<void> {
    return new Promise<void>((resolve, reject) => {
      chrome.contextMenus.create({
        id: configuration.id,
        title: configuration.title,
        type: configuration.type,
        contexts: configuration.contexts,
        checked: configuration.checked,
        // visible: configuration.visible, TODO: Chrome types are not updated.
        enabled: configuration.enabled,
        parentId: configuration.parentId,
        onclick: (item, tab) => this.fireClickedEvent(configuration.event, item, tab)
      }, () => chrome.runtime.lastError
        ? reject(new ContextMenuItemCreatinonFailedException())
        : resolve()
      )
    })
  }

  /**
   * Fire an event notifying that a context menu item was clicked.
   *
   * @param event The event to be fired, if any
   * @param item The item that was clicked
   * @param tab The tab this happened in
   */
  private fireClickedEvent (event: Class<ContextMenuItemClickedEvent>, item: any, tab: any) : void {
    // Build up the info object.
    const info: ContextMenuItemClickedEventInfo = {
      ...item,
      tabId: tab.id
    }

    // Find the event to be fired.
    const Constructor: Class<ContextMenuItemClickedEvent> = event || ContextMenuItemClickedEvent

    // Fire the event.
    this.dispatcher.fire(new Constructor(info))
  }

}
