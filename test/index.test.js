const { test, expect } = require('@jest/globals')
const handler = require('../index')

test('Non GET request', async () => {
    const response = await handler.handler({ requestContext: {http: { method: "PUT"}}})
    expect(response.statusCode).toBe('400')
})

test('GET request returns OK', async () => {
    const response = await handler.handler({ requestContext: {http: { method: "GET"}}})
    expect(response.statusCode).toBe('200')
    expect(JSON.parse(response.body).really).toBe('yes')
})