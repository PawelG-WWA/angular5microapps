import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../../../models/service.model';
import { ServiceSupplier } from '../../../services/service-supplier.service';
import { ActivatedRoute } from '@angular/router';
import { ServiceComment } from '../../../models/service.comment.model';

@Component({
    selector: 'app-service-page-bootstrap',
    templateUrl: './service-page-bootstrap.component.html',
    styleUrls: ['./service-page-bootstrap.component.css']
})
export class ServicePageBootstrapComponent implements OnInit {
    public service: Service;
    public isPopupOn: boolean;

    constructor(private serviceSupplier: ServiceSupplier,
        private route: ActivatedRoute) {
            this.isPopupOn = false;
        }

    public ngOnInit() {
        this.service = this.serviceSupplier.getSelectedService();

        if (this.service === undefined) {
            this.service = this.serviceSupplier.getServiceFromRoute(this.route);
        }
    }

    public togglePopup(): void {
        this.isPopupOn = !this.isPopupOn;
    }

    public saveCommentForService(comment: ServiceComment) {
        this.service.comments.push(comment);
        this.togglePopup();
    }
}
