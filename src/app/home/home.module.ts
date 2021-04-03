import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './maincontent/maincontent.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    MainContentComponent
  ]

})
export class HomeModule { }
