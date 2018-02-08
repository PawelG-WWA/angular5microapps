import { IDbCollection } from '../../../../re-usables/services/abstract/i-db-collection';
import { IDbEntity } from '../../../../re-usables/services/abstract/i-db-entity';

export interface IRepo<T extends IDbEntity> {
    collection: IDbCollection<T>;
}
