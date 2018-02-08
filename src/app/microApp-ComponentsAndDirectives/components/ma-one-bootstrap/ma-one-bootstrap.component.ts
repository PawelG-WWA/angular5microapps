import { Component } from '@angular/core';
import { ServiceSupplier } from '../../services/service-supplier.service';
import { Service } from '../../models/service.model';

@Component({
    selector: 'app-ma-one-bootstrap',
    templateUrl: './ma-one-bootstrap.component.html',
    styleUrls: ['./ma-one-bootstrap.component.css']
})
export class MaOneBootstrapComponent {

    public availableServices: Array<Service>;

    constructor(private serviceSupplier: ServiceSupplier) {
        this.availableServices = this.serviceSupplier.getAvailableServices();
    }
}
