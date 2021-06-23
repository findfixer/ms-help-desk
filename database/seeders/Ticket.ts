import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Ticket from '../../app/Models/Ticket'

export default class TicketSeeder extends BaseSeeder {
  public async run() {
    await Ticket.createMany([
      {
        title: 'Problemas no acesso',
        description: 'Não estou conseguindo logar na minha conta',
        ticketCategoryId: 3,
        ticketStatusId: 2,
      },
      {
        title: 'A tela de perfil está com problemas',
        description: 'Não consigo ver todas as minhas opções',
        ticketCategoryId: 1,
        ticketStatusId: 1,
      },
      {
        title: 'Não consigo finalizar a compra',
        description: 'Depois de colocar os dados do cartão, fica em loading eterno.',
        ticketCategoryId: 4,
        ticketStatusId: 4,
      },
    ])
  }
}
