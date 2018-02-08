import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { MaOneBootstrapComponent } from './components/ma-one-bootstrap/ma-one-bootstrap.component';
import { ServiceSelectionComponent } from './components/service-selection/service-selection.component';

// service providers
import { MA1_SERVICES_PROVIDERS } from './services/services.providers';

const children: Routes = [

];

const baseRoutes: Routes = [
    { path: 'components-and-directives', component: MaOneBootstrapComponent, children: children }
];

@NgModule({
    declarations: [
        MaOneBootstrapComponent,
        ServiceSelectionComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(baseRoutes)
    ],
    providers: [
        MA1_SERVICES_PROVIDERS
    ]
})
export class MicroAppOneModule {}
