import { Injectable } from '@angular/core';
import { ServicesRepo } from './repos/services-repo';
import { Service } from '../models/service.model';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ServiceSupplier {

    private selectedService: Service;

    constructor(private servicesRepo: ServicesRepo) {}

    public getAvailableServices(): Array<Service> {
        return this.servicesRepo.collection.getAll();
    }

    public setSelectService(service: Service): void {
        this.selectedService = service;
    }

    public getSelectedService(): Service {
        return this.selectedService;
    }

    public getServiceFromRoute(route: ActivatedRoute): Service {
        return this.servicesRepo.collection.query(x => x.link.includes(route.snapshot.params['name']));
    }
}
