import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Ticket from 'App/Models/Ticket'
import TicketService from 'App/Services/TicketService'
import TicketCreateValidator from 'App/Validators/TicketCreateValidator'
import TicketUpdateValidator from 'App/Validators/TicketUpdateValidator'

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
    await ctx.request.validate(TicketUpdateValidator)

    const body = ctx.request.body()
    delete body['ticket_status_id']

    return await TicketService.update(ctx.request.param('id'), body)
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

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {Promise<any>}
   * @memberof TicketController
   */
  public async changeStatus(ctx: HttpContextContract): Promise<any> {
    const statusTicketId = ctx.request.body()['ticket_status_id']

    if (this.isNotValidStatus(statusTicketId)) return 'Ticket status Id invalid!'

    return await TicketService.changeStatus(ctx.request.param('id'), statusTicketId, ctx.auth)
  }

  /**
   *
   *
   * @private
   * @param {*} statusTicketId
   * @return {*}  {boolean}
   * @memberof TicketController
   */
  private isNotValidStatus(statusTicketId: number): boolean {
    if (!Number.isInteger(statusTicketId)) {
      return true
    }

    if (statusTicketId < 1 || statusTicketId > 5) {
      return true
    }

    return false
  }
}
