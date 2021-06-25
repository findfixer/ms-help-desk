import test from 'japa'

import Ticket from 'App/Models/Ticket'
import TicketStatusEnum from 'App/enums/TicketStatusEnum'
import ChangeStatusToDone from 'App/Actions/ChangeStatusToDone'
import ChangeStatusToPaused from 'App/Actions/ChangeStatusToPaused'
import ChangeStatusToPending from 'App/Actions/ChangeStatusToPending'
import ChangeStatusToInProgress from 'App/Actions/ChangeStatusToInProgress'
import ChangeStatusToInReview from 'App/Actions/ChangeStatusToInReview'

test.group('Alterações de Status do Ticket para Pendente', () => {
  test('Alterado de Pendente para Pendente', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Pending

    try {
      await new ChangeStatusToPending(ticket, {}).run()
    } catch (e) {
      assert.equal(e.message, 'O Status não pode ser mudado para pendente.')
    }
  })

  test('Alterado de Em Progresso para Pendente', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InProgress

    try {
      await new ChangeStatusToPending(ticket, {}).run()
    } catch (e) {
      assert.equal(e.message, 'O Status não pode ser mudado para pendente.')
    }
  })

  test('Alterado de Pausado para Pendente', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Paused

    try {
      await new ChangeStatusToPending(ticket, {}).run()
    } catch (e) {
      assert.equal(e.message, 'O Status não pode ser mudado para pendente.')
    }
  })

  test('Alterado de Em Homologação para Pendente', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InReview

    try {
      await new ChangeStatusToPending(ticket, {}).run()
    } catch (e) {
      assert.equal(e.message, 'O Status não pode ser mudado para pendente.')
    }
  })

  test('Alterado de Concluído para Pendente', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Done

    try {
      await new ChangeStatusToPending(ticket, {}).run()
    } catch (e) {
      assert.equal(e.message, 'O Status não pode ser mudado para pendente.')
    }
  })
})

test.group('Alterações de Status do Ticket para Em Progresso', () => {
  test('Alterado de Pendente para Em Progresso', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Pending

    const ticketResult = await new ChangeStatusToInProgress(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.InProgress)
  })

  test('Alterado de Em Progresso para Em Progresso', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InProgress

    const ticketResult = await new ChangeStatusToInProgress(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.InProgress)
  })

  test('Alterado de Pausado para Em Progresso', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Paused

    const ticketResult = await new ChangeStatusToInProgress(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.InProgress)
  })

  test('Alterado de Em Homologação para Em Progresso', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InReview

    const ticketResult = await new ChangeStatusToInProgress(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.InProgress)
  })

  test('Alterado de Concluído para Em Progresso', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Done

    try {
      await new ChangeStatusToInProgress(ticket, {}).run()
    } catch (e) {
      assert.equal(e.message, 'Um chamado não pode ser reaberto.')
    }
  })
})

test.group('Alterações de Status do Ticket para Pausada', () => {
  test('Alterado de Pendente para Pausada', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Pending

    const ticketResult = await new ChangeStatusToPaused(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.Paused)
  })

  test('Alterado de En Progresso para Pausada', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InProgress

    const ticketResult = await new ChangeStatusToPaused(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.Paused)
  })

  test('Alterado de Pausado para Pausada', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Paused

    const ticketResult = await new ChangeStatusToPaused(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.Paused)
  })

  test('Alterado de Em Homologação para Pausada', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InReview

    const ticketResult = await new ChangeStatusToPaused(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.Paused)
  })

  test('Alterado de Concluído para Pausada', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Done

    try {
      await new ChangeStatusToPaused(ticket, {}).run()
    } catch (e) {
      assert.equal(e.message, 'Um chamado não pode ser reaberto.')
    }
  })
})

test.group('Alterações de Status do Ticket para Em Homologação', () => {
  test('Alterado de Pendente para Em Homologação', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Pending

    const ticketResult = await new ChangeStatusToInReview(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.InReview)
  })

  test('Alterado de Em Progresso para Em Homologação', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InProgress

    const ticketResult = await new ChangeStatusToInReview(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.InReview)
  })

  test('Alterado de Pausado para Em Homologação', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Paused

    const ticketResult = await new ChangeStatusToInReview(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.InReview)
  })

  test('Alterado de Em Homologação para Em Homologação', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InReview

    const ticketResult = await new ChangeStatusToInReview(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.InReview)
  })

  test('Alterado de Concluído para Em Homologação', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Done

    try {
      await new ChangeStatusToInReview(ticket, {}).run()
    } catch (e) {
      assert.equal(e.message, 'Um chamado não pode ser reaberto.')
    }
  })
})

test.group('Alterações de Status do Ticket para Concluido', () => {
  test('Alterado de Pendente para Concluido', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Pending

    const ticketResult = await new ChangeStatusToDone(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.Done)
  })

  test('Alterado de Em Progresso para Concluido', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InProgress

    const ticketResult = await new ChangeStatusToDone(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.Done)
  })

  test('Alterado de Pausado para Concluido', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Paused

    const ticketResult = await new ChangeStatusToDone(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.Done)
  })

  test('Alterado de Em Homologação para Concluido', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.InReview

    const ticketResult = await new ChangeStatusToDone(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.Done)
  })

  test('Alterado de Concluído para Concluido', async (assert) => {
    const ticket = new Ticket()
    ticket.ticketStatusId = TicketStatusEnum.Done

    const ticketResult = await new ChangeStatusToDone(ticket, {}).run()
    assert.equal(ticketResult.ticketStatusId, TicketStatusEnum.Done)
  })
})
