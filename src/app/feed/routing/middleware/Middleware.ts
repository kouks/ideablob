import { Request } from '../types/Request'

export interface Middleware {

  /**
   * Handle the request.
   *
   * @param request The request to be handled
   */
  handle (request: Request) : Promise<Request>

}
