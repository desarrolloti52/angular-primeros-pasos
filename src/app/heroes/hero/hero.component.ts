import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: String = "iron man";
  public age: number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHeroe(){
    this.name = "Spiderman";
  }

  changeAge(){
    this.age = 23;
  }

  resetForm(){
    this.name = "iron man"; 
    this.age = 45;
  }
  
}

