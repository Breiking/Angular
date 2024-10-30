import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  template: `
    <section>
      @if (isLoggedIn) {
      <p>Bienvenido {{ userName }}</p>
      <img 
      (click)="greet()"
      alt="photo" src="https://github.com/Jhon.png">

      }@else {

      <p>!Inicia Session</p>
      <button (click)="isLoggedIn = true">Log In</button>

      }
      <app-games 
      (addFavoriteEvent)="getFavorite($event)"
      userName = {{userName}}> </app-games>

      @if(favGame != ''){
        <p>Tu juego favorito es {{favGame}} </p>
      }
    </section>
  `,
  styleUrl: './user.component.css',
})
export class UserComponent {
  userName = 'julian';
  isLoggedIn = false;
  favGame = ''

  getFavorite(gameName: string) {
    this.favGame = gameName;
  }
  greet() {
    alert("hola")
  }
}

