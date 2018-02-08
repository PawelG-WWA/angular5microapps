import { IRepo } from './i-repo';
import { IDbEntity } from '../../../../re-usables/services/abstract/i-db-entity';
import { DbCollection } from '../../../../re-usables/services/db-collection';

export abstract class RepoBase<T extends IDbEntity> implements IRepo<T> {
    public collection: DbCollection<T>;
}
