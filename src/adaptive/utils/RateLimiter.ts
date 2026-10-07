export class RateLimiter {
    private buckets: Map<string, { count: number; resetAt: number }> = new Map();

    constructor(private maxRequests: number, private windowMs: number) {}

    isAllowed(key: string): boolean {
        const now = Date.now();
        const bucket = this.buckets.get(key);
        if (!bucket || bucket.resetAt < now) {
            this.buckets.set(key, { count: 1, resetAt: now + this.windowMs });
            return true;
        }
        if (bucket.count >= this.maxRequests) return false;
        bucket.count++;
        return true;
    }
}
