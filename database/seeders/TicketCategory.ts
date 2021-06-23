import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TicketCategory from '../../app/Models/TicketCategory'

export default class TicketCategorySeeder extends BaseSeeder {
  public async run() {
    await TicketCategory.createMany([
      {
        description: 'Baixa prioridade',
      },
      {
        description: 'Média prioridade',
      },
      {
        description: 'Alta prioridade',
      },
      {
        description: 'Urgência',
      },
    ])
  }
}
