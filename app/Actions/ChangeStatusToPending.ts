import Ticket from 'App/Models/Ticket'
import { Exception } from '@poppinss/utils'

/**
 *
 *
 * @export
 * @class ChangeStatusToPending
 */
export default class ChangeStatusToPending {
  /**
   *
   *
   * @private
   * @type {*}
   * @memberof ChangeStatusToPending
   */
  private user: any

  /**
   *
   *
   * @private
   * @type {Ticket}
   * @memberof ChangeStatusToPending
   */
  private ticket: Ticket

  /**
   * Creates an instance of ChangeStatusToPending.
   * @param {Ticket} ticket
   * @param {*} user
   * @memberof ChangeStatusToPending
   */
  constructor(ticket: Ticket, user: any) {
    this.user = user
    this.ticket = ticket
  }

  /**
   *
   *
   * @memberof ChangeStatusToPending
   */
  public run() {
    throw new Exception('O Status não pode ser mudado para pendente.')
  }
}
