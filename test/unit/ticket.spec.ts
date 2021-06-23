import { Exception } from '@poppinss/utils'
import ChangeStatusToInProgress from 'App/Actions/ChangeStatusToInProgress'
import ChangeStatusToPaused from 'App/Actions/ChangeStatusToPaused'
import ChangeStatusToPending from 'App/Actions/ChangeStatusToPending'
import ChangeStatusToDone from 'App/Actions/ChangeStatusToDone'
import TicketStatusEnum from 'App/enums/TicketStatusEnum'
import Ticket from 'App/Models/Ticket'
import test from 'japa'

test.group('Alterações de Status do Ticket para Pendente', () => {
  test('Alterado de Pendente para Pendente', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Pending

    const result: any = assert.throw(() => new ChangeStatusToPending(ticket, {}).run())
    assert.equal(result.message, 'O Status não pode ser mudado para pendente.')
  })

  test('Alterado de Em Progresso para Pendente', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InProgress

    const result: any = assert.throw(() => new ChangeStatusToPending(ticket, {}).run())
    assert.equal(result.message, 'O Status não pode ser mudado para pendente.')
  })

  test('Alterado de Pausado para Pendente', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Paused

    const result: any = assert.throw(() => new ChangeStatusToPending(ticket, {}).run())
    assert.equal(result.message, 'O Status não pode ser mudado para pendente.')
  })

  test('Alterado de Em Homologação para Pendente', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InReview

    const result: any = assert.throw(() => new ChangeStatusToPending(ticket, {}).run())
    assert.equal(result.message, 'O Status não pode ser mudado para pendente.')
  })

  test('Alterado de Concluído para Pendente', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Done

    const result: any = assert.throw(() => new ChangeStatusToPending(ticket, {}).run())
    assert.equal(result.message, 'O Status não pode ser mudado para pendente.')
  })
})

test.group('Alterações de Status do Ticket para Em Progresso', () => {
  test('Alterado de Pendente para Em Progresso', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Pending

    const error: any = assert.throw(() => new ChangeStatusToInProgress(ticket, {}).run())
    assert.equal(error.message, 'Um chamado já iniciado não pode voltar ficar como pendente.')
  })

  test('Alterado de Em Progresso para Em Progresso', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InProgress

    new ChangeStatusToInProgress(ticket, {}).run()
  })

  test('Alterado de Pausado para Em Progresso', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Paused

    new ChangeStatusToInProgress(ticket, {}).run()
  })

  test('Alterado de Em Homologação para Em Progresso', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InReview

    new ChangeStatusToInProgress(ticket, {}).run()
  })

  test('Alterado de Concluído para Em Progresso', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Done

    const error: any = assert.throw(() => new ChangeStatusToInProgress(ticket, {}).run())
    assert.equal(error.message, 'Um chamado não pode ser reaberto.')
  })
})

test.group('Alterações de Status do Ticket para Pausada', () => {
  test('Alterado de Pendente para Pausada', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Pending

    new ChangeStatusToPaused(ticket, {}).run()
  })

  test('Alterado de En Progresso para Pausada', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InProgress

    new ChangeStatusToPaused(ticket, {}).run()
  })

  test('Alterado de Pausado para Pausada', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Paused

    new ChangeStatusToPaused(ticket, {}).run()
  })

  test('Alterado de Em Homologação para Pausada', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InReview

    new ChangeStatusToPaused(ticket, {}).run()
  })

  test('Alterado de Concluído para Pausada', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Done

    const error: any = assert.throw(() => new ChangeStatusToPaused(ticket, {}).run())
    assert.equal(error.message, 'Um chamado não pode ser reaberto.')
  })
})

test.group('Alterações de Status do Ticket para Em Homologação', () => {
  test('Alterado de Pendente para Em Homologação', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Pending

    new ChangeStatusToPaused(ticket, {}).run()
  })

  test('Alterado de Em Progresso para Em Homologação', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InProgress

    new ChangeStatusToPaused(ticket, {}).run()
  })

  test('Alterado de Pausado para Em Homologação', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Paused

    new ChangeStatusToPaused(ticket, {}).run()
  })

  test('Alterado de Em Homologação para Em Homologação', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InReview

    new ChangeStatusToPaused(ticket, {}).run()
  })

  test('Alterado de Concluído para Em Homologação', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Done

    const error: any = assert.throw(() => new ChangeStatusToPaused(ticket, {}).run())
    assert.equal(error.message, 'Um chamado não pode ser reaberto.')
  })
})

test.group('Alterações de Status do Ticket para Concluido', () => {
  test('Alterado de Pendente para Concluido', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Pending

    new ChangeStatusToDone(ticket, {}).run()
  })

  test('Alterado de Em Progresso para Concluido', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InProgress

    new ChangeStatusToDone(ticket, {}).run()
  })

  test('Alterado de Pausado para Concluido', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Paused

    new ChangeStatusToDone(ticket, {}).run()
  })

  test('Alterado de Em Homologação para Concluido', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InReview

    new ChangeStatusToDone(ticket, {}).run()
  })

  test('Alterado de Concluído para Concluido', (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Done

    new ChangeStatusToDone(ticket, {}).run()
  })
})
