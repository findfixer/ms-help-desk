import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TicketsSchema extends BaseSchema {
  protected tableName = 'tickets'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('title')
      table.string('description')
      table.integer('customer_id')
      table.integer('assigner_id')
      table.integer('ticket_category_id')
      table.integer('ticket_status_id')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
