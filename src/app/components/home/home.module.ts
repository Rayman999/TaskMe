import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { 
  constructor() {
    console.log('HomeModule loaded'); 
  }
  // create a method to load the module
  load() {
    return HomeModule;
  }
}
