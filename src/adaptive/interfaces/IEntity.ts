export interface IEntity { readonly id: number; }
export interface ISerializable { toJSON(): Record<string, unknown>; }
export interface ILifecycle { readonly createdAt?: Date; readonly updatedAt?: Date; }
export type PersistableEntity = IEntity & ISerializable;
