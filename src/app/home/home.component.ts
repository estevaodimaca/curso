import { Component, OnDestroy } from '@angular/core';
import { ExemploComponent } from "../components/exemplo/exemplo.component";

@Component({
  selector: 'app-home',
  imports: [ExemploComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy{

  ngOnDestroy(): void {
      console.log("destruiu");
  }
}
