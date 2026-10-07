export interface HealthStatus {
    status: 'ok' | 'degraded' | 'down';
    uptime: number;
    checks: Record<string, { status: string; latency?: number }>;
}

export class HealthCheck {
    private checks: Map<string, () => Promise<boolean>> = new Map();
    private startTime = Date.now();

    register(name: string, check: () => Promise<boolean>): void {
        this.checks.set(name, check);
    }

    async run(): Promise<HealthStatus> {
        const checks: HealthStatus['checks'] = {};
        let allOk = true;
        for (const [name, check] of this.checks) {
            const start = Date.now();
            try {
                const ok = await check();
                checks[name] = { status: ok ? 'ok' : 'fail', latency: Date.now() - start };
                if (!ok) allOk = false;
            } catch {
                checks[name] = { status: 'error', latency: Date.now() - start };
                allOk = false;
            }
        }
        return {
            status: allOk ? 'ok' : 'degraded',
            uptime: Date.now() - this.startTime,
            checks
        };
    }
}
