import { Component, DoCheck, OnDestroy } from '@angular/core';
import { ExemploComponent } from "../components/exemplo/exemplo.component";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements DoCheck{

  num: number = 1;

   ngDoCheck(): void {
      console.log("uma mudanca foi feita!");
   }

  addOne(){
    this.num++;
  }
}
