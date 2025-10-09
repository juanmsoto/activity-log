// test/integration.test.js
import assert from 'node:assert';
import { existsSync } from 'node:fs';
assert.ok(existsSync('./dist/index.js'), 'dist/index.js no existe (recuerda que el build debe correr antes)');
// Carga sin ejecutar side-effects críticos
const mod = await import('../dist/index.js');
assert.ok(mod, 'No se pudo importar dist/index.js');
console.log('✅ integration ok');
