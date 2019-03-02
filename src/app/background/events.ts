import { ListenerBag } from '@exteranto/core'

/**
 * Events.
 */

import { Exception } from '@exteranto/exceptions'
import { AppBootedEvent, Event } from '@exteranto/core'

import {
  ExtensionUpdatedEvent
} from '@exteranto/api'

/**
 * Listeners.
 */

import { Debug } from '@/helpers'
import { Handler } from '@/exceptions/Handler'

import {
  ClearsLocalStorage,
  BootsMessageListener,
} from './listeners'

export default (touch: (event: any) => ListenerBag) => {

  touch(AppBootedEvent)
    .addListener(new BootsMessageListener)

  /**
   * Extension lifecycle events.
   */

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
