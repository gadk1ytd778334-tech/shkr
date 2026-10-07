const processed = new Set<string>();

export function withIdempotency<T>(key: string, fn: () => Promise<T>): Promise<T> {
    if (processed.has(key)) {
        throw new Error(`Операция с ключом ${key} уже выполнена`);
    }
    return fn().then(result => {
        processed.add(key);
        return result;
    });
}
