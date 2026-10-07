import { IEntity } from './IEntity';
export interface IRepository<T extends IEntity> {
    findById(id: number): Promise<T | null>;
    findAll(): Promise<T[]>;
    save(entity: T): Promise<T>;
    delete(id: number): Promise<boolean>;
}
