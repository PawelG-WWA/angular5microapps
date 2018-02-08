import { IDbCollection } from './abstract/i-db-collection';
import { IDbEntity } from './abstract/i-db-entity';

export class DbCollection<T extends IDbEntity> implements IDbCollection<T> {

    public collection: Array<T>;

    constructor() {
        this.collection = new Array<T>();
    }

    public get(id: number): T {
        return this.collection.find(x => x.id === id);
    }

    public getAll(): Array<T> {
        return this.collection;
    }

    public query(predicate: (element: T) => boolean): T {
        return this.collection.find(predicate);
    }

    public add(element: T): void {
        this.collection.push(element);
    }

    public delete(element: T): void {
        const indexToDelete = this.collection.findIndex(x => x.id === element.id);

        this.collection.splice(indexToDelete, 1);
    }

    public update(element: T): void {
        const indexToUpdate = this.collection.findIndex(x => x.id === element.id);

        this.collection[indexToUpdate] = element;
    }
}
