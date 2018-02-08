// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicroAppOneModule } from './microApp-ComponentsAndDirectives/micro-app-one.module';

// components
import { AppComponent } from './app.component';
import { MainComponent } from './root-components/main/main.component';
import { TileComponent } from './re-usables/components/tile/tile.component';

const routes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    MicroAppOneModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
