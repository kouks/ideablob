import { Class } from '@/types'
import { ResourceManager } from './ResourceManager'

/**
 * The @Manager annotation that resolves the resource manager for the provided
 * model class.
 *
 * @param model The model to create the manager for.
 */
export function Manager<T> (model: Class<T>) : (target: any, property: string) => void {
  return (target: any, property: string) : void => {
    const key: string = `__manager_${model.name}`

    Object.defineProperty(target, property, {
      get () : ResourceManager<T> {
        return target[key] === undefined
          ? target[key] = ResourceManager.for<T>(model)
          : target[key]
      },

      set (value: ResourceManager<T>) : void {
        target[key] = value
      },
    })
  }
}
