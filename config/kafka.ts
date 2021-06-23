import Env from '@ioc:Adonis/Core/Env'
import { KafkaClient, Consumer, Producer, ProduceRequest, Message } from 'kafka-node'

/**
 *
 *
 * @param {string} topic
 * @param {CallableFunction} onSuccess
 * @param {CallableFunction} [onFail]
 * @return {*}  {(Message | void)}
 */
const consume = (
  topic: string,
  onSuccess: CallableFunction,
  onFail: CallableFunction
): Message | void => {
  const client = new KafkaClient({ kafkaHost: Env.get('KAFKA_SERVER') })
  const consumer = new Consumer(client, [{ topic }], { autoCommit: false })

  consumer.on('message', (message) => onSuccess(message))

  consumer.on('error', (err) => onFail(err))

  consumer.on('offsetOutOfRange', (err) => onFail(err))
}

/**
 *
 *
 * @param {string} topic
 * @param {*} messages
 * @param {CallableFunction} [onSuccess]
 * @param {CallableFunction} [onFail]
 */
const produce = (
  topic: string,
  messages: any,
  onSuccess?: CallableFunction,
  onFail?: CallableFunction
) => {
  const client = new KafkaClient({ kafkaHost: Env.get('KAFKA_SERVER') })
  const producer = new Producer(client)

  const payloads: ProduceRequest[] = [
    {
      topic: topic,
      messages: messages,
    },
  ]

  producer.on('ready', function () {
    producer.send(payloads, (err, data) => {
      if (err) {
        console.log('[kafka-producer -> ' + topic + ']: broker failed to update: ' + err)
        onFail !== undefined ? onFail(err) : null
      } else {
        onSuccess !== undefined ? onSuccess(data) : null
      }
    })
  })

  producer.on('error', function (err) {
    console.log('Producer is in error state: ' + err)
    onFail !== undefined ? onFail(err) : null
  })
}

export default { consume, produce } as Kafka
