import Event from '@ioc:Adonis/Core/Event'

import Ticket from 'App/Models/Ticket'
import TicketStatusEnum from 'App/enums/TicketStatusEnum'
import TicketTransform from 'App/Transforms/TicketTransform'
import ChangeStatusToDone from 'App/Actions/ChangeStatusToDone'
import ChangeStatusToPaused from 'App/Actions/ChangeStatusToPaused'
import ChangeStatusToPending from 'App/Actions/changeStatusToPending'
import ChangeStatusToInReview from 'App/Actions/ChangeStatusToInReview'
import ChangeStatusToInProgress from 'App/Actions/ChangeStatusToInProgress'

/**
 *
 *
 * @export
 * @class TicketService
 */
export default class TicketService {
  /**
   *
   *
   * @static
   * @return {*}  {Promise<Ticket[]>}
   * @memberof TicketService
   */
  public static async index(): Promise<Ticket[]> {
    const tickets = await Ticket.query().preload('ticketCategory').preload('ticketStatus')

    return tickets
  }

  /**
   *
   *
   * @static
   * @param {number} id
   * @return {*}  {(Promise<Ticket | null>)}
   * @memberof TicketService
   */
  public static async show(id: number): Promise<Ticket | null> {
    const ticket = await Ticket.findOrFail(id)

    // await ticket?.load('assigner')
    // await ticket?.load('customer')
    await ticket?.load('ticketCategory')
    await ticket?.load('ticketStatus')

    return ticket
  }

  /**
   *
   *
   * @param {Record<string, string>} body
   * @return {*}  {Promise<Ticket>}
   * @memberof TicketService
   */
  public static async store(body: Record<string, string>): Promise<Ticket> {
    const ticket = await Ticket.create(body)

    Event.emit('ticket.create', ticket)

    return ticket
  }

  /**
   *
   *
   * @param {Record<string, string>} body
   * @return {*}  {Promise<Ticket>}
   * @memberof TicketService
   */
  public static async update(id: number, body: Record<string, string>): Promise<Ticket | string> {
    let ticket = await Ticket.findOrFail(id)

    ticket = new TicketTransform(ticket, body).toModel()
    Event.emit('ticket.update', ticket)

    return ticket
  }

  /**
   *
   *
   * @static
   * @param {number} id
   * @return {*}  {Promise<Ticket>}
   * @memberof TicketService
   */
  public static async destroy(id: number): Promise<Ticket> {
    const ticket = await Ticket.findOrFail(id)

    await ticket.delete()

    Event.emit('ticket.delete', ticket)

    return ticket
  }

  /**
   *
   *
   * @static
   * @param {number} id
   * @param {number} statusTypeId
   * @param {*} user
   * @memberof TicketService
   */
  public static async changeStatus(id: number, statusTypeId: number, user: any) {
    const ticket = await Ticket.findOrFail(id)

    switch (statusTypeId) {
      case TicketStatusEnum.Pending:
        new ChangeStatusToPending(ticket, user).run()
        break
      case TicketStatusEnum.InProgress:
        new ChangeStatusToInProgress(ticket, user).run()
        break
      case TicketStatusEnum.Paused:
        new ChangeStatusToPaused(ticket, user).run()
        break
      case TicketStatusEnum.InReview:
        new ChangeStatusToInReview(ticket, user).run()
        break
      case TicketStatusEnum.Done:
        new ChangeStatusToDone(ticket, user).run()
        break
    }
  }
}
