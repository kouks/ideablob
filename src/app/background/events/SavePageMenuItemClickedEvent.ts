import { ContextMenuItemClickedEvent } from '@/services/contextMenus'

export class SavePageMenuItemClickedEvent extends ContextMenuItemClickedEvent {

  /**
   * The page the click happened on.
   */
  get page () : string {
    return this.info.pageUrl
  }

  /**
   * The URL object of the page the click happened on.
   */
  get url () : URL {
    return new URL(this.info.pageUrl)
  }

  /**
   * The ID of the tab the click happened in.
   */
  get tabId () : number {
    return this.info.tabId
  }

}
