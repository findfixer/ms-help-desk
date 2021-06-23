import { DateTime } from 'luxon'
import { column, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import Ticket from './Ticket'

/**
 *
 *
 * @export
 * @class TicketStatus
 * @extends {BaseModel}
 */
export default class TicketStatus extends BaseModel {
  /**
   *
   *
   * @static
   * @memberof TicketStatus
   */
  public static table = 'ticket_status'

  /**
   *
   *
   * @type {number}
   * @memberof TicketStatus
   */
  @column({ isPrimary: true })
  public id: number

  /**
   *
   *
   * @type {DateTime}
   * @memberof TicketStatus
   */
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  /**
   *
   *
   * @type {DateTime}
   * @memberof TicketStatus
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /**
   *
   *
   * @type {string}
   * @memberof TicketStatus
   */
  @column()
  public description: string

  /**
   *
   *
   * @type {HasMany<typeof Ticket>}
   * @memberof TicketStatus
   */
  @hasMany(() => Ticket)
  public ticket: HasMany<typeof Ticket>
}
