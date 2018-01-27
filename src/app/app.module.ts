// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { TileComponent } from './re-usables/components/tile/tile.component';

const routes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
