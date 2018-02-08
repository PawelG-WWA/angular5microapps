import { IDbEntity } from './i-db-entity';

export interface IDbCollection<T extends IDbEntity> {
    collection: Array<T>;

    get(id: number): T;

    getAll(): Array<T>;

    query(predicate: (element: T) => boolean): T;

    add(element: T): void;

    delete(element: T): void;

    update(element: T): void;
}
