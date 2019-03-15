import { Client } from 'awi'
import { Class } from '@/types'
import { Param } from '@exteranto/core'

export class Paginator<T> {

  /**
   * Awi instance configurations.
   */
  @Param('awi')
  private awi: { [key: string]: () => Client }

  /**
   * The curren page for the paginator.
   */
  private page: number = 0

  /**
   *
   * @param resource The resource to paginate over
   * @param perpage The count of items to show per page
   */
  constructor (private resource: Class<T>, private perpage: number) {
    //
  }

  /**
   * A method to retrieve the next page of the resource.
   * TODO: total etc
   *
   * @return The next page of the resource instances
   */
  public async next () : Promise<T[]> {
    return this.awi.base()
      .use(async req => req.query.skip = String(this.page * this.perpage))
      .use(async req => req.query.take = String(this.perpage))
      .body<T[]>(this.resource.name.toLowerCase())
      .then(resources => resources.map(item => new this.resource(item)))
  }

}
