
const { test } = require('node:test');
const assert = require('node:assert');
const { createServer } = require('./app');

test('Application should return status 200', async (t) => {
    const server = createServer();

    await new Promise(resolve => server.listen(0, resolve));

    t.after(() => server.close());

    const port = server.address().port;
    const response = await fetch(`http://localhost:${port}`);

    assert.strictEqual(response.status, 200);

    const message = await response.text();

    assert.strictEqual(
        message,
        'Hello! My CI/CD Pipeline is Working!'
    );
});
