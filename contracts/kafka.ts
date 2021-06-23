/**
 * Contract source: https://git.io/Jfefs
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

import { Message } from 'kafka-node'

declare module 'Config/kafka' {
  interface Kafka {
    /**
     *
     *
     * @memberof Kafka
     */
    consume: (
      topic: string,
      onSuccess: CallableFunction,
      onFail?: CallableFunction
    ) => Message | void

    /**
     *
     *
     * @memberof Kafka
     */
    produce: (
      topic: string,
      messages: any,
      onSuccess?: CallableFunction,
      onFail?: CallableFunction
    ) => void
  }
}
