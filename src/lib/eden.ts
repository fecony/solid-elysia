import { edenTreaty } from '@elysiajs/eden';
import type { App } from '~/routes/api/[[elysia]]';

export const eden = edenTreaty<App>('http://localhost:3000', {});
