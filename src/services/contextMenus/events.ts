import { Event } from '@exteranto/core'
import { ContextMenuItemClickedEventInfo } from './types'

export class ContextMenuItemClickedEvent extends Event {

  constructor (public info: ContextMenuItemClickedEventInfo) {
    super()
  }

}
