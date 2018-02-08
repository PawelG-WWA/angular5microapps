import { Component, Input, OnInit } from '@angular/core';
import { Tile } from '../../models/tile.model';

@Component({
    selector: 'app-ma-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.css']
})
export class TileComponent {
    @Input() tileData: Tile;

    public getPath(): string[] {
        return [`/${this.tileData.path}`];
    }
}
