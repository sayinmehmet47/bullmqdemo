const concurrently = require('concurrently');

concurrently(['npx tsx server.ts', 'npx tsx worker.ts'], {
  killOthers: ['failure', 'success'],
  logWarnings: true,
});
