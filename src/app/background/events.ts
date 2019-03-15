import { ListenerBag } from '@exteranto/core'

/**
 * Events.
 */

import { Exception } from '@exteranto/exceptions'
import { AppBootedEvent, Event } from '@exteranto/core'
import { SavePageMenuItemClickedEvent } from './events/SavePageMenuItemClickedEvent'

import {
  ExtensionUpdatedEvent,
  ExtensionInstalledEvent,
} from '@exteranto/api'

/**
 * Listeners.
 */

import { Debug } from '@/helpers'
import { Handler } from '@/exceptions/Handler'

import {
  SharesPage,
  ClearsLocalStorage,
  BootsMessageListener,
  CustomizesContextMenus,
} from './listeners'

export default (touch: (event: any) => ListenerBag) => {

  touch(AppBootedEvent)
    .addListener(new BootsMessageListener)
    .addListener(new CustomizesContextMenus)

  touch(SavePageMenuItemClickedEvent)
    .addListener(new SharesPage)

  /**
   * Extension lifecycle events.
   */

  touch(ExtensionInstalledEvent)

  touch(ExtensionUpdatedEvent)
    .addListener(new ClearsLocalStorage)

  /**
   * Exception handler.
   */

  touch(Exception)
    .addListener(new Handler)

  /**
   * Debug handler.
   */

  touch(Event)
    .addListener(new Debug('Background'))

}
