import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-pages.component.html'
})

export class MainPageComponent {
  constructor(
    private DbzService:DbzService
  ){}

  get characters(): Character[]{
    return [...this.DbzService.characters];
  }

  onDeleteCharacterId(id:string):void{
    this.DbzService.onDeleteCharacterId(id);
  }

  addNewCharacter(character: Character):void{
    this.DbzService.addNewCharacter(character);
  }
}