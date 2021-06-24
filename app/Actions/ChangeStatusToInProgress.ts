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
   * @memberof ChangeStatusToInProgress
   */
  public run() {
    if (this.ticket.ticketStatusId === TicketStatusEnum.Done) {
      throw new Exception('Um chamado não pode ser reaberto.')
    }

    if (this.ticket.ticketStatusId === TicketStatusEnum.Pending) {
      throw new Exception('Um chamado já iniciado não pode voltar ficar como pendente.')
    }

    this.ticket.ticketStatusId = TicketStatusEnum.InProgress

    this.ticket.save()
    kafka.produce('ticket:change-status', this.ticket)
  }
}
