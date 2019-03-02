import {
  TabsProvider,
  StorageProvider,
  ExtensionProvider,
  MessagingProvider,
  BrowserActionProvider,
} from '@exteranto/api'

import { ContextMenusProvider } from '@/services/contextMenus'

import { Awi } from 'awi'
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

    contextMenus: {
      savePage: { id: 'save-page-to-ideablob', title: 'Save page to Ideablob' },
    },

    awi: {
      base: () => new Awi()
        // This would be so nice.
        // .use(async req => req.executor = Container.resolveOptional<Executor>(AbstractExecutor))
        .use(async req => req.base = 'apigw/prod/v1'),
    },

  },

}
