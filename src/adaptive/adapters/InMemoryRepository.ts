import { IRepository } from '../interfaces/IRepository';
import { IEntity } from '../interfaces/IEntity';
export class InMemoryRepository<T extends IEntity> implements IRepository<T> {
    protected items: Map<number, T> = new Map();
    async findById(id: number): Promise<T | null> { return this.items.get(id) ?? null; }
    async findAll(): Promise<T[]> { return Array.from(this.items.values()); }
    async save(entity: T): Promise<T> { this.items.set(entity.id, entity); return entity; }
    async delete(id: number): Promise<boolean> { return this.items.delete(id); }
}
