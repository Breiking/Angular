import { Component } from '@angular/core';
import { BotsService } from '../../core/services/bots.service';
import { Peticiones } from '../../core/models/peticiones';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  peticiones:Peticiones[] = []

  constructor(private botService: BotsService){}

  // ngOnInit(): void{
  //   this.getData()
  // }

  getData(){
    this.botService.getRutaPrueba().subscribe((data) => {
      this.peticiones = data
    })
  }
}
