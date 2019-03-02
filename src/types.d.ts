// Pre exteranto 3.0 polyfills.

/**
 * Custom constructor types.
 */

declare type Abstract<T> = Function & { prototype: T }

declare interface Class<T> extends Abstract<T> {
  new (...args: any[]) : T
}
