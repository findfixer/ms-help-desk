import { DateTime } from 'luxon'
import { column, BaseModel } from '@ioc:Adonis/Lucid/Orm'

/**
 *
 *
 * @export
 * @class Customer
 * @extends {BaseModel}
 */
export default class Customer extends BaseModel {
  /**
   *
   *
   * @type {number}
   * @memberof Customer
   */
  @column({ isPrimary: true })
  public id: number

  /**
   *
   *
   * @type {DateTime}
   * @memberof Customer
   */
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  /**
   *
   *
   * @type {DateTime}
   * @memberof Customer
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
