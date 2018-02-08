import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../../../models/service.model';
import { ServiceSupplier } from '../../../services/service-supplier.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-service-page-bootstrap',
    templateUrl: './service-page-bootstrap.component.html',
    styleUrls: ['./service-page-bootstrap.component.css']
})
export class ServicePageBootstrapComponent implements OnInit {
    public service: Service;

    constructor(private serviceSupplier: ServiceSupplier,
        private route: ActivatedRoute) {}

    public ngOnInit() {
        this.service = this.serviceSupplier.getSelectedService();

        if (this.service === undefined) {
            this.service = this.serviceSupplier.getServiceFromRoute(this.route);
        }

    }
}
