import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { FlipCardFrontComponent } from './components/flip-card/flip-card-front';
import { FlipCardBackComponent } from './components/flip-card/flip-card-back';



@NgModule({
  declarations: [
    FlipCardComponent,
    FlipCardFrontComponent,
    FlipCardBackComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    FlipCardComponent,
    FlipCardFrontComponent,
    FlipCardBackComponent
  ]
})
export class FlipCardModule { }

