import { builtinModules } from 'module';
import { defineConfig } from '@solidjs/start/config';

export default defineConfig({
  start: {
    server: {
      preset: 'bun',
    },
  },
  build: {
    commonjsOptions: {
      ignore: [...builtinModules, 'ws'],
    },
  },
});
