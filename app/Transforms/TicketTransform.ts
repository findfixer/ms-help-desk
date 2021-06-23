import { get } from 'lodash'
import Ticket from 'App/Models/Ticket'

/**
 *
 *
 * @export
 * @class TicketTransform
 */
export default class TicketTransform {
  private model: Ticket
  private body: Record<string, any>

  constructor(ticket: Ticket, body: Record<string, any>) {
    this.model = ticket
    this.body = body
  }
  /**
   *
   *
   * @param {Record<string, any>} body
   * @return {*}  {Ticket}
   * @memberof TicketTransform
   */
  public toModel(): Ticket {
    this.model.title = get(this.body, 'title')
    this.model.description = get(this.body, 'description')
    this.model.customerId = get(this.body, 'customer_id')
    this.model.assignerId = get(this.body, 'assigner_id')
    this.model.ticketCategoryId = get(this.body, 'ticket_category_id')
    this.model.ticketStatusId = get(this.body, 'ticket_status_id')

    return this.model
  }
}
