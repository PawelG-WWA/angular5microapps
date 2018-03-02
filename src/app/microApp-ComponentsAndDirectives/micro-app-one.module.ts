import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { MaOneBootstrapComponent } from './components/ma-one-bootstrap/ma-one-bootstrap.component';
import { ServiceSelectionComponent } from './components/service-selection/service-selection.component';
import { ServicePageBootstrapComponent } from './components/service-page/service-page-bootstrap/service-page-bootstrap.component';
import { BannerImageComponent } from './components/service-page/banner-image/banner-image.component';
import { ServiceRateSummaryComponent } from './components/service-page/service-rate-summary/service-rate-summary.component';
import { ServiceCommentComponent } from './components/service-page/service-comment/service-comment.component';
import { AddCommentComponent } from './components/service-page/service-add-comment/add-comment.component';

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
        BannerImageComponent,
        ServiceRateSummaryComponent,
        ServiceCommentComponent,
        AddCommentComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(baseRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        MA1_SERVICES_PROVIDERS
    ]
})
export class MicroAppOneModule {}
