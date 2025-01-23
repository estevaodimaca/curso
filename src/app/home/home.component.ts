import { Component, DoCheck, OnDestroy } from '@angular/core';
import { ExemploComponent } from "../components/exemplo/exemplo.component";

@Component({
  selector: 'app-home',
  imports: [ExemploComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy, DoCheck{

  ngOnDestroy(): void {
      console.log("destruiu");
  }

  ngDoCheck(): void {
      console.log("uma mudanca foi feita!");
  }
}
