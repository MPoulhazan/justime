import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCounterComponent } from './card-counter.component';
import { LoadingModule } from '../../loading/loading.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
      CardCounterComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CardCounterComponent]
})
export class CardCounterModule { }
