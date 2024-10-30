import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UserComponent],
  template: ` <app-user/> ` ,
  styles: ``
})
export class AppComponent {
  city = "Bucaramnga";
}
