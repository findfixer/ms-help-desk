import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TicketStatus extends BaseSchema {
  protected tableName = 'ticket_status'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('description')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
