const test = require('node:test');
const assert = require('node:assert');
const app = require('../app');

test('GET /status returns 200 and status OK', async () => {
    const server = app.listen(0);
    const {
        port
    } = server.address();
    try {
        const res = await fetch(`http://127.0.0.1:${port}/status`);
        assert.strictEqual(res.status, 200);
        const body = await res.json();
        assert.strictEqual(body.status, 'OK');
    } finally {
        server.close();
    }
});