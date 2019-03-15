import { Resource } from '@/services/resourceManager'

export interface Blob {

  /**
   * The blob url.
   */
  url: string

}

export class Blobs extends Resource<Blob> implements Blob {

  /**
   * {@inheritdoc}
   */
  get url () : string {
    return this.data.url
  }

}
