import assert from 'node:assert';
import { existsSync } from 'node:fs';

assert.ok(existsSync('./dist/index.js'), 'dist/index.js no existe');

// Mock de inputs requeridos por la Action:
process.env['INPUT_GITHUB_USERNAME'] = 'dummy-user';
// agrega otros si tu acción los requiere, p.ej.:
// process.env['INPUT_GITHUB_TOKEN'] = 'dummy-token';

const mod = await import('../dist/index.js'); // ahora no debería lanzar
assert.ok(mod, 'No se pudo importar dist/index.js');

console.log('✅ integration (import con inputs mock)');
