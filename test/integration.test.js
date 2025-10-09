// test/integration.test.js
import assert from 'node:assert';
import { existsSync, statSync } from 'node:fs';

// 1) Verifica que el build exista
assert.ok(existsSync('./dist/index.js'), 'dist/index.js does not exists');
assert.ok(statSync('./dist/index.js').size > 0, 'dist/index.js is empty');

// 2) Mockea TODOS los inputs requeridos por la action antes del import
process.env['INPUT_GITHUB_USERNAME'] = 'dummy-user';
process.env['INPUT_GITHUB_TOKEN'] = 'dummy-token';

// 3) Ahora importa el bundle
const mod = await import('../dist/index.js');
assert.ok(mod, 'No se pudo importar dist/index.js');

console.log('✅ integration');
