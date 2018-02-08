import { Database } from '../../services/_database';
import { RepoBase } from './abstract/repo-base';
import { Service } from '../../models/service.model';
import { DbCollection } from '../../../re-usables/services/db-collection';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicesRepo extends RepoBase<Service> {
    public collection: DbCollection<Service>;

    constructor(private dbContext: Database) {
        super();
        this.collection = dbContext.services;
    }
}
