export class GracefulShutdown {
    private handlers: Array<() => Promise<void>> = [];
    private isShuttingDown = false;

    register(handler: () => Promise<void>): void {
        this.handlers.push(handler);
    }

    setup(): void {
        const shutdown = async (signal: string) => {
            if (this.isShuttingDown) return;
            this.isShuttingDown = true;
            console.log(`[shutdown] получен ${signal}, завершаем работу...`);
            for (const handler of this.handlers) {
                try { await handler(); }
                catch (e) { console.error('shutdown error:', e); }
            }
            process.exit(0);
        };
        process.on('SIGTERM', () => shutdown('SIGTERM'));
        process.on('SIGINT', () => shutdown('SIGINT'));
    }
}
