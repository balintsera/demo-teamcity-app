const { test } = require('@jest/globals')
const handler = require('../index')

test('handles non GET request with exception', async () => {
    const response = await handler.handler({ requestContext: {http: { method: "PUT"}}})
    expect(response.statusCode).toBe('400')
})