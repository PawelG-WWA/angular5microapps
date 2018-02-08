import { Component, Input } from '@angular/core';
import { Service } from '../../models/service.model';

@Component({
    selector: 'app-ma-service-selection',
    templateUrl: './service-selection.component.html',
    styleUrls: ['./service-selection.component.css']
})
export class ServiceSelectionComponent {
    @Input() service: Service;
}
