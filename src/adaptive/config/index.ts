import { z } from 'zod';

const ConfigSchema = z.object({
    NODE_ENV: z.enum(['development', 'staging', 'production']).default('development'),
    PORT: z.coerce.number().default(3000),
    LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
    DB_URL: z.string().optional(),
    JWT_SECRET: z.string().min(16).optional()
});

export const config = ConfigSchema.parse(process.env);
