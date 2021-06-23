import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TicketStatus from '../../app/Models/TicketStatus'

export default class TicketStatusSeeder extends BaseSeeder {
  public async run() {
    await TicketStatus.createMany([
      {
        description: 'Pendente',
      },
      {
        description: 'Em Progresso',
      },
      {
        description: 'Pausada',
      },
      {
        description: 'Em Homologação',
      },
      {
        description: 'Concluído',
      },
    ])
  }
}
