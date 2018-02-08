import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { MaOneBootstrapComponent } from './components/ma-one-bootstrap/ma-one-bootstrap.component';
import { ServiceSelectionComponent } from './components/service-selection/service-selection.component';
import { ServicePageBootstrapComponent } from './components/service-page/service-page-bootstrap/service-page-bootstrap.component';
import { BannerImageComponent } from './components/service-page/banner-image/banner-image.component';

// service providers
import { MA1_SERVICES_PROVIDERS } from './services/services.providers';

const children: Routes = [
    { path: '', component: ServiceSelectionComponent },
    { path: 'service/:name', component: ServicePageBootstrapComponent }
];

const baseRoutes: Routes = [
    { path: 'components-and-directives', component: MaOneBootstrapComponent, children: children }
];

@NgModule({
    declarations: [
        MaOneBootstrapComponent,
        ServiceSelectionComponent,
        ServicePageBootstrapComponent,
        BannerImageComponent
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
