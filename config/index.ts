import {
  TabsProvider,
  StorageProvider,
  ExtensionProvider,
  MessagingProvider,
  BrowserActionProvider,
} from '@exteranto/api'

import {
  ContextMenusProvider,
} from '@/services/contextMenus'

import { env } from '@/helpers'

export default {

  providers: [

    /**
     * All Exteranto framework service providers are specified here.
     */

    TabsProvider,
    StorageProvider,
    ExtensionProvider,
    MessagingProvider,
    BrowserActionProvider,

    /**
     * All plugin service providers are specified here.
     */

    //

    /**
     * All application service providers are specified here.
     */

    ContextMenusProvider,

  ],

  /**
   * All parameters that are here are accessible from the application container
   * using `Container.resolveParam()` or the @Param annotations.
   */

  bound: {

    app: {
      name: 'ideablob',
      version: '0.0.1',
    },

    cache: {
      driver: env('CACHE_DRIVER'),
      forfeit: false,
      timeout: 600,
    },

    contextMenuIds: {
      savePage: 'save-page-to-ideablob',
    },

  },
}
