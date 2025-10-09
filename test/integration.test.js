import assert from 'node:assert';
import { existsSync } from 'node:fs';

assert.ok(existsSync('./dist/index.js'), 'dist/index.js does not exist');

import { statSync } from 'node:fs';
assert.ok(statSync('./dist/index.js').size > 0, 'dist/index.js is empty');

console.log('✅ integration (dist exists)');
