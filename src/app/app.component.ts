import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'CopyTickets';
  public counter: number = 0;

  increaseBy(value: number):void{
    this.counter += value;
  }

  resetCounter(): void{
    this.counter = 0;
  }

}