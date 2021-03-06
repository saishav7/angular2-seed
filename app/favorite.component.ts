import {Component} from 'angular2/core'

@Component({
    selector: 'favorite',
    template: `
        <h2>Favorites<h2>
        <i 
            class="glyphicon"
            [class.glyphicon-star]="isFavorite"
            [class.glyphicon-star-empty]="!isFavorite"
            (click)="onClick()">
        </i>
    `    
})
export class FavoriteComponent {
    isFavorite = false;
    onClick() {
        this.isFavorite = !this.isFavorite;
    }
}