import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service.model';
import { ServiceSupplier } from '../../services/service-supplier.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-ma-service-selection',
    templateUrl: './service-selection.component.html',
    styleUrls: ['./service-selection.component.css']
})
export class ServiceSelectionComponent implements OnInit {

    private availableServices: Array<Service>;

    constructor(private serviceSupplier: ServiceSupplier,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.availableServices = this.serviceSupplier.getAvailableServices();
    }

    public selectService(service: Service): void {
        this.serviceSupplier.setSelectService(service);

        this.router.navigate(service.link, { relativeTo: this.route });
    }
}
