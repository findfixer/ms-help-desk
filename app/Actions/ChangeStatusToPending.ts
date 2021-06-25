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
   * @public
   * @type {*}
   * @memberof ChangeStatusToPending
   */
  public user: any

  /**
   *
   *
   * @public
   * @type {Ticket}
   * @memberof ChangeStatusToPending
   */
  public ticket: Ticket

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
  public async run() {
    throw new Exception('O Status não pode ser mudado para pendente.')
  }
}
