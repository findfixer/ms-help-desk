import Ticket from 'App/Models/Ticket'
import { Exception } from '@poppinss/utils'
import TicketStatusEnum from 'App/enums/TicketStatusEnum'
import kafka from 'Config/kafka'

/**
 *
 *
 * @export
 * @class ChangeStatusToInProgress
 */
export default class ChangeStatusToInProgress {
  /**
   *
   *
   * @public
   * @type {*}
   * @memberof ChangeStatusToInProgress
   */
  public user: any

  /**
   *
   *
   * @public
   * @type {Ticket}
   * @memberof ChangeStatusToInProgress
   */
  public ticket: Ticket

  /**
   * Creates an instance of ChangeStatusToInProgress.
   * @param {Ticket} ticket
   * @param {*} user
   * @memberof ChangeStatusToInProgress
   */
  constructor(ticket: Ticket, user: any) {
    this.user = user
    this.ticket = ticket
  }

  /**
   *
   *
   * @return {*}
   * @memberof ChangeStatusToInProgress
   */
  public async run() {
    if (this.ticket.ticketStatusId === TicketStatusEnum.Done) {
      throw new Exception('Um chamado não pode ser reaberto.')
    }

    this.ticket.ticketStatusId = TicketStatusEnum.InProgress

    const ticket = await this.ticket.save()
    kafka.produce('ticket.change-status', JSON.stringify(this.ticket))

    return ticket
  }
}
