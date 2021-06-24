// import test from 'japa'
// import { JSDOM } from 'jsdom'
// import supertest from 'supertest'

// const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

// test.group('API Integrations Tests', () => {
//   let id
//   let body = {
//     title: 'TESTE',
//     description: 'TESTE',
//     customer_id: 1,
//   }

//   test('Create Ticket', async (assert) => {
//     const { text } = await supertest(BASE_URL).post('/api/tickets').send(body).expect(200)

//     const response = JSON.parse(text)

//     id = response.id
//     const reponseBody = {
//       title: response.title,
//       description: response.description,
//       customer_id: response.customer_id,
//     }

//     assert.exists(id)
//     assert.equal(JSON.stringify(reponseBody), JSON.stringify(body))
//   })

//   test('Find Ticket', async (assert) => {
//     const { text } = await supertest(BASE_URL).get(`/api/tickets/${id}`).expect(200)

//     const response = JSON.parse(text)
//     assert.equal(id, response.id)
//   })

//   test('Delete Ticket', async (assert) => {
//     const { text } = await supertest(BASE_URL).delete(`/api/tickets/${id}`).expect(200)

//     const response = JSON.parse(text)
//     assert.equal(id, response.id)
//   })
// })
