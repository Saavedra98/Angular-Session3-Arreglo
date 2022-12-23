import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    BodyComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BodyComponent,
    TitleComponent
  ]
})
export class HeaderModule { }
