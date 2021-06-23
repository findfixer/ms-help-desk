import { DateTime } from 'luxon'
import { column, BaseModel } from '@ioc:Adonis/Lucid/Orm'

/**
 *
 *
 * @export
 * @class User
 * @extends {BaseModel}
 */
export default class User extends BaseModel {
  /**
   *
   *
   * @type {number}
   * @memberof User
   */
  @column({ isPrimary: true })
  public id: number

  /**
   *
   *
   * @type {DateTime}
   * @memberof User
   */
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  /**
   *
   *
   * @type {DateTime}
   * @memberof User
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
