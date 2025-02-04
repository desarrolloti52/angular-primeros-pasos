import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { MainPageComponent } from './pages/main-pages.component';
import { ListComponent } from './components/list/list.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
