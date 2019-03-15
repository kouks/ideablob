import { Class } from '@/types'
import { ResourceManager } from './ResourceManager'

/**
 * The @Manager annotation that resolves the resource manager for the provided
 * resource class.
 *
 * @param resource The resource to create the manager for.
 */
export function Manager<T> (resource: Class<T>) : (target: any, property: string) => void {
  return (target: any, property: string) : void => {
    const key: string = `__manager_${resource.name}`

    Object.defineProperty(target, property, {
      get () : ResourceManager<T> {
        return target[key] === undefined
          ? target[key] = ResourceManager.for<T>(resource)
          : target[key]
      },

      set (value: ResourceManager<T>) : void {
        target[key] = value
      },
    })
  }
}
