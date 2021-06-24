import Ticket from 'App/Models/Ticket'
import { Exception } from '@poppinss/utils'
import TicketStatusEnum from 'App/enums/TicketStatusEnum'
import kafka from 'Config/kafka'

/**
 *
 *
 * @export
 * @class ChangeStatusToPaused
 */
export default class ChangeStatusToPaused {
  /**
   *
   *
   * @public
   * @type {*}
   * @memberof ChangeStatusToPaused
   */
  public user: any

  /**
   *
   *
   * @public
   * @type {Ticket}
   * @memberof ChangeStatusToPaused
   */
  public ticket: Ticket

  /**
   * Creates an instance of ChangeStatusToPaused.
   * @param {Ticket} ticket
   * @param {*} user
   * @memberof ChangeStatusToPaused
   */
  constructor(ticket: Ticket, user: any) {
    this.user = user
    this.ticket = ticket
  }

  /**
   *
   *
   * @memberof ChangeStatusToPaused
   */
  public run() {
    if (this.ticket.ticketStatusId === TicketStatusEnum.Done) {
      throw new Exception('Um chamado não pode ser reaberto.')
    }

    this.ticket.ticketStatusId = TicketStatusEnum.Paused

    this.ticket.save()
    kafka.produce('ticket:change-status', this.ticket)
  }
}
