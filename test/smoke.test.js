// test/smoke.test.js
import assert from 'node:assert';
// Smoke: el runner de Node existe y estamos en CI
assert.strictEqual(typeof process.version, 'string');
assert.ok(process.env.GITHUB_ACTIONS !== undefined);
console.log('✅ smoke ok');
