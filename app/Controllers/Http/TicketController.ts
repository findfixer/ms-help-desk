import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Ticket from 'App/Models/Ticket'
import TicketService from 'App/Services/TicketService'
import TicketCreateValidator from 'App/Validators/TicketCreateValidator'

/**
 *
 *
 * @export
 * @class TicketController
 */
export default class TicketController {
  /**
   *
   *
   * @return {*}  {Promise<Ticket[]>}
   * @memberof TicketController
   */
  public async index(): Promise<Ticket[]> {
    return await TicketService.index()
  }

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {(Promise<Ticket | null>)}
   * @memberof TicketController
   */
  public async show(ctx: HttpContextContract): Promise<Ticket | null> {
    const id = ctx.request.param('id') as number

    return await TicketService.show(id)
  }

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {Promise<Ticket>}
   * @memberof TicketController
   */
  public async store(ctx: HttpContextContract): Promise<Ticket> {
    await ctx.request.validate(TicketCreateValidator)

    return await TicketService.store(ctx.request.body())
  }

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {Promise<Ticket>}
   * @memberof TicketController
   */
  public async update(ctx: HttpContextContract): Promise<Ticket | string> {
    await ctx.request.validate(TicketCreateValidator)

    return await TicketService.update(ctx.request.param('id'), ctx.request.body())
  }

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {Promise<Ticket>}
   * @memberof TicketController
   */
  public async destroy(ctx: HttpContextContract): Promise<Ticket> {
    return await TicketService.destroy(ctx.request.param('id'))
  }

  public async changeStatus(ctx: HttpContextContract): Promise<any> {
    const statusTicketId = ctx.request.body()['ticket_status_id']

    if (statusTicketId) return

    return await TicketService.changeStatus(ctx.request.param('id'), statusTicketId, ctx.auth)
  }
}
