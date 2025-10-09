import assert from 'node:assert';
import { existsSync, statSync } from 'node:fs';

assert.ok(existsSync('./dist/index.js'), 'dist/index.js does not exist');
assert.ok(statSync('./dist/index.js').size > 0, 'dist/index.js is empty');

// Mocks de inputs requeridos por la action:
process.env['INPUT_GITHUB_USERNAME'] = 'dummy-user';
process.env['INPUT_GITHUB_TOKEN'] = 'dummy-token';
process.env['INPUT_EVENT_LIMIT'] = '5';
process.env['INPUT_EVENT_TYPES'] = 'push'; 

process.env['INPUT_OWNER'] = 'octocat';
process.env['INPUT_REPO'] = 'Hello-World';

// Importa luego de setear los mocks
const mod = await import('../dist/index.js');
assert.ok(mod, 'Could not import dist/index.js');
console.log('✅ integration');
