export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
    private level: LogLevel = (process.env.LOG_LEVEL as LogLevel) ?? 'info';
    private order: LogLevel[] = ['debug', 'info', 'warn', 'error'];

    private shouldLog(level: LogLevel): boolean {
        return this.order.indexOf(level) >= this.order.indexOf(this.level);
    }

    private log(level: LogLevel, message: string, meta?: unknown): void {
        if (!this.shouldLog(level)) return;
        const entry = {
            timestamp: new Date().toISOString(),
            level,
            message,
            ...(meta ? { meta } : {})
        };
        console.log(JSON.stringify(entry));
    }

    debug(msg: string, meta?: unknown) { this.log('debug', msg, meta); }
    info(msg: string, meta?: unknown)  { this.log('info', msg, meta); }
    warn(msg: string, meta?: unknown)  { this.log('warn', msg, meta); }
    error(msg: string, meta?: unknown) { this.log('error', msg, meta); }
}

export const logger = new Logger();
