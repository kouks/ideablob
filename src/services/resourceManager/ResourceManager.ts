import { Class } from '@/types'
import { Client, Response } from 'awi'
import { Paginator } from './Paginator'
import { Param } from '@exteranto/core'

export class ResourceManager<T> {

  /**
   * Awi instance configurations.
   */
  @Param('awi')
  private awi: { [key: string]: () => Client }

  /**
   * @param resource The resource to use for this resource manager instance
   */
  constructor (private resource: Class<T>) {
    //
  }

  /**
   * List the resource.
   *
   * @return An array of the resource instances
   */
  public async list () : Promise<T[]> {
    return this.awi.base()
      .body<T[]>(this.resource.name.toLowerCase())
      .then(resources => resources.map(item => new this.resource(item)))
  }

  /**
   * Store the provided resource.
   *
   * @param storable The resource to be stored
   * @return The response from the server
   */
  public async store (storable: T) : Promise<Response> {
    return this.awi.base()
      .post<Response>(this.resource.name.toLowerCase(), storable)
  }

  /**
   * Retrieve the paginator for the current resource.
   *
   * @param perpage The count of items per page
   * @return The paginator instance linked to the resource
   */
  public paginator (perpage: number) : Paginator<T> {
    return new Paginator<T>(this.resource, perpage)
  }

  /**
   * Static constructor for the resource manager.
   *
   * @param resource The resource to use for the new resource manager instance
   * @return A new resource manager instance
   */
  public static for<T> (resource: Class<T>) {
    return new ResourceManager<T>(resource)
  }

}
