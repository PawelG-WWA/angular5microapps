import { Injectable } from '@angular/core';
import { ServicesRepo } from './repos/services-repo';
import { Service } from '../models/service.model';

@Injectable()
export class ServiceSupplier {

    constructor(private servicesRepo: ServicesRepo) {}

    public getAvailableServices(): Array<Service> {
        console.log(this.servicesRepo);
        return this.servicesRepo.collection.getAll();
    }
}
