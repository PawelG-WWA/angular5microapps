import { Database } from './_database';
import { ServicesRepo } from './repos/services-repo';
import { ServiceSupplier } from './service-supplier.service';

export const MA1_SERVICES_PROVIDERS: Array<any> = [
    { provide: Database, useClass: Database },
    { provide: ServicesRepo, useClass: ServicesRepo },
    { provide: ServiceSupplier, useClass: ServiceSupplier }
];
