import { Component } from '@angular/core';
import { Tile } from './re-usables/models/tile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private componentsAndDirectives: Tile = { title: 'Components & basic directives', path: 'components-and-directives', color: 'blue' };
  private tile2: Tile = { title: '.', path: '', color: 'red' };
  private tile3: Tile = { title: '.', path: '', color: 'green' };
  private tile4: Tile = { title: '.', path: '', color: 'purple' };
  private tile5: Tile = { title: '.', path: '', color: 'gray' };
  private tile6: Tile = { title: '.', path: '', color: 'brown' };

  public microApps: Array<Tile> = [
    this.componentsAndDirectives,
    this.tile2,
    this.tile3,
    this.tile4,
    this.tile5,
    this.tile6
  ];
}
