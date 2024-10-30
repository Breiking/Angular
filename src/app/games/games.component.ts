import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <h3>Los juegos favoritos de {{userName}} </h3>
    <ul>
      @for (game of games; track game.id) {
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() userName = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  games = [
    {
      id: 1,
      name: 'Juego 1',
    },
    {
      id: 2,
      name: 'Juego 2',
    },
    {
      id: 3,
      name: 'Juego 3',
    },
    {
      id: 4,
      name: 'Juego 4',
    },
  ];
  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName)
    alert(`A ${this.userName} le gusta jugar ${gameName}`)
  }
}

