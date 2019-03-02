import { Listener, Autowired, Dispatcher } from '@exteranto/core'

/**
 * Logger class helper. Simply pushes all arguments to console.log but does not
 * show in production.
 */
export class Log {

  /**
   * Log on the info level.
   *
   * @param args The arguments to be logged
   */
  public static info (...args: any[]) : void {
    Log.log('info', args)
  }

  /**
   * Log on the warn level.
   *
   * @param args The arguments to be logged
   */
  public static warn (...args: any[]) : void {
    Log.log('warn', args)
  }

  /**
   * Log on the error level.
   *
   * @param args The arguments to be logged
   */
  public static error (...args: any[]) : void {
    Log.log('error', args)
  }

  /**
   * Logging helper.
   *
   * @param level The level to use
   * @param args The arguments to be logged
   */
  private static log (level: string, args: any[]) : void {
    if (env('DEBUG') === true) {
      console.log(`[${level.toUpperCase()}]`, `[${new Date().toTimeString().split(' ').shift()}]`, ...args)
    }
  }

}

/**
 * Env parser.
 */
export const env: any = (key: string, fallback?: string | number | boolean) => {
  const value: string = $env[key]

  if (value === undefined) {
    return fallback
  }

  if (/^\d+$/.test(value)) {
    return Number(value)
  }

  switch (value.toLowerCase()) {
    case 'true':
    case '(true)':
      return true
    case 'false':
    case '(false)':
      return false
    case 'empty':
    case '(empty)':
      return ''
    case 'null':
    case '(null)':
      return
  }

  return value
}

/**
 * Debug listener to be assigned to any event. Logs any fired events passing
 * through.
 */
export class Debug implements Listener {

  /**
   * Checks if event has any listeners.
   */
  @Autowired
  private dispatcher: Dispatcher

  /**
   * @param context The context of the debugger.
   */
  constructor (public context: string) {
    //
  }

  /**
   * Debug all events passing through this listener.
   *
   * @param event The fired event.
   */
  public handle (event: Event) : void {
    try {
      // This throws if event has no listeners.
      this.dispatcher.touch(
        this.dispatcher.type(event.constructor.name),
      )

      Log.info(`[${this.context}]`, '[Event]', event)
    } catch {
      // Event has no active listeners.
    }
  }

}
