import { DateTime } from 'luxon'
import { column, BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import User from './User'
import Customer from './Customer'
import TicketCategory from './TicketCategory'
import TicketStatus from './TicketStatus'

/**
 *
 *
 * @export
 * @class Ticket
 * @extends {BaseModel}
 */
export default class Ticket extends BaseModel {
  /**
   *
   *
   * @type {number}
   * @memberof Ticket
   */
  @column({ isPrimary: true })
  public id: number

  /**
   *
   *
   * @type {DateTime}
   * @memberof Ticket
   */
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  /**
   *
   *
   * @type {DateTime}
   * @memberof Ticket
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /**
   *
   *
   * @type {string}
   * @memberof Ticket
   */
  @column()
  public title: string

  /**
   *
   *
   * @type {string}
   * @memberof Ticket
   */
  @column()
  public description: string

  /**
   *
   *
   * @type {number}
   * @memberof Ticket
   */
  @column()
  public customerId: number

  /**
   *
   *
   * @type {number}
   * @memberof Ticket
   */
  @column()
  public assignerId: number

  /**
   *
   *
   * @type {number}
   * @memberof Ticket
   */
  @column()
  public ticketCategoryId: number

  /**
   *
   *
   * @type {number}
   * @memberof Ticket
   */
  @column()
  public ticketStatusId: number

  /**
   *
   *
   * @type {HasOne<typeof Customer>}
   * @memberof Ticket
   */
  @hasOne(() => Customer)
  public customer: HasOne<typeof Customer>

  /**
   *
   *
   * @type {HasOne<typeof User>}
   * @memberof Ticket
   */
  @hasOne(() => User)
  public assigner: HasOne<typeof User>

  /**
   *
   *
   * @type {HasOne<typeof TicketCategory>}
   * @memberof Ticket
   */
  @belongsTo(() => TicketCategory)
  public ticketCategory: BelongsTo<typeof TicketCategory>

  /**
   *
   *
   * @type {HasOne<typeof TicketStatus>}
   * @memberof Ticket
   */
  @belongsTo(() => TicketStatus)
  public ticketStatus: BelongsTo<typeof TicketStatus>
}
