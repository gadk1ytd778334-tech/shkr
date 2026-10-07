const cache = new Map<string, { value: unknown; expires: number }>();

export function Cacheable(ttlMs: number = 60_000) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = async function (...args: unknown[]) {
            const cacheKey = `${target.constructor.name}:${key}:${JSON.stringify(args)}`;
            const cached = cache.get(cacheKey);
            if (cached && cached.expires > Date.now()) return cached.value;
            const result = await original.apply(this, args);
            cache.set(cacheKey, { value: result, expires: Date.now() + ttlMs });
            return result;
        };
        return descriptor;
    };
}
