const app = require('./server.js');
const request = require('supertest');


describe('compares values to text', () => {
    test('compares values to text', async () => {
        const response = await request(app).get('/test')
        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe('Hello World!')
    })
})