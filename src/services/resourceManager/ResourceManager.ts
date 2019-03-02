import { Client } from 'awi'
import { Class } from '@/types'
import { Param } from '@exteranto/core'

export class ResourceManager<T> {

  /**
   * Awi instance configurations.
   */
  @Param('awi')
  private awi: { [key: string]: () => Client }

  /**
   * @param model The model to use for this resource manager instance
   */
  constructor (private model: Class<T>) {
    //
  }

  /**
   * List the resource.
   *
   * @return An array of the resource instances.
   */
  public async list () : Promise<T[]> {
    return this.awi.base()
      .body<T[]>(this.model.name.toLowerCase())
      .then(resources => resources.map(item => new this.model(item)))
  }

  /**
   * Static constructor for the resource manager.
   *
   * @param model The model to use for the new resource manager instance
   * @return A new resource manager instance
   */
  public static for<T> (model: Class<T>) {
    return new ResourceManager<T>(model)
  }

}
