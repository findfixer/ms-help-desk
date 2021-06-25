import kafka from 'Config/kafka'
import Ticket from 'App/Models/Ticket'
import TicketStatusEnum from 'App/enums/TicketStatusEnum'

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
  public user: any

  /**
   *
   *
   * @private
   * @type {Ticket}
   * @memberof ChangeStatusToDone
   */
  public ticket: Ticket

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
   * @return {*}
   * @memberof ChangeStatusToDone
   */
  public async run() {
    this.ticket.ticketStatusId = TicketStatusEnum.Done

    const ticket = await this.ticket.save()
    kafka.produce('ticket.change-status', JSON.stringify(this.ticket))

    return ticket
  }
}
