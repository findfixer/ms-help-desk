import Ticket from 'App/Models/Ticket'
import { Exception } from '@poppinss/utils'
import TicketStatusEnum from 'App/enums/TicketStatusEnum'
import kafka from 'Config/kafka'

/**
 *
 *
 * @export
 * @class ChangeStatusToInReview
 */
export default class ChangeStatusToInReview {
  /**
   *
   *
   * @public
   * @type {*}
   * @memberof ChangeStatusToInReview
   */
  public user: any

  /**
   *
   *
   * @public
   * @type {Ticket}
   * @memberof ChangeStatusToInReview
   */
  public ticket: Ticket

  /**
   * Creates an instance of ChangeStatusToInReview.
   * @param {Ticket} ticket
   * @param {*} user
   * @memberof ChangeStatusToInReview
   */
  constructor(ticket: Ticket, user: any) {
    this.user = user
    this.ticket = ticket
  }

  /**
   *
   *
   * @memberof ChangeStatusToInReview
   */
  public run() {
    if (this.ticket.ticketStatusId === TicketStatusEnum.Done) {
      throw new Exception('Um chamado não pode ser reaberto.')
    }

    this.ticket.ticketStatusId = TicketStatusEnum.InReview

    this.ticket.save()
    kafka.produce('ticket:change-status', this.ticket)
  }
}
