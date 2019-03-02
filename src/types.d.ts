// Pre exteranto 3.0 polyfills.

/**
 * Custom constructor types.
 */

export type Abstract<T> = Function & { prototype: T }

export interface Class<T> extends Abstract<T> {
  new (...args: any[]) : T
}
