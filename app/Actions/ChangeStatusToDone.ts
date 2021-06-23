import Ticket from 'App/Models/Ticket'
import TicketStatusEnum from 'App/enums/TicketStatusEnum'
import kafka from 'Config/kafka'

/**
 *
 *
 * @export
 * @class ChangeStatusToDone
 */
export default class ChangeStatusToDone {
  /**
   *
   *
   * @private
   * @type {*}
   * @memberof ChangeStatusToDone
   */
  private user: any

  /**
   *
   *
   * @private
   * @type {Ticket}
   * @memberof ChangeStatusToDone
   */
  private ticket: Ticket

  /**
   * Creates an instance of ChangeStatusToDone.
   * @param {Ticket} ticket
   * @param {*} user
   * @memberof ChangeStatusToDone
   */
  constructor(ticket: Ticket, user: any) {
    this.user = user
    this.ticket = ticket
  }

  /**
   *
   *
   * @memberof ChangeStatusToDone
   */
  public run() {
    this.ticket.ticketStatusId = TicketStatusEnum.Done

    this.ticket.save()
    kafka.produce('ticket:change-status', this.ticket)
  }
}
