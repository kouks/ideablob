import { ListenerBag } from '@exteranto/core'

/**
 * Events.
 */

import { Exception } from '@exteranto/exceptions'
import { AppBootedEvent, Event } from '@exteranto/core'

/**
 * Listeners.
 */

import { Debug } from '@/helpers'
import { Handler } from '@/exceptions/Handler'
import { BootsMessageListener } from './listeners/BootsMessageListener'
import { BootsBaseVueInstance } from './listeners/BootsBaseVueInstance'

export default (touch: (event: any) => ListenerBag) => {

  touch(AppBootedEvent)
    .addListener(new BootsBaseVueInstance)
    .addListener(new BootsMessageListener)

  /**
   * Exception handler.
   */
  touch(Exception)
    .addListener(new Handler)

  /**
   * Debug handler.
   */

  touch(Event)
    .addListener(new Debug('Feed'))
}
