import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBusComponent } from './card-bus.component';
import { LoadingModule } from '../../loading/loading.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
      CardBusComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CardBusComponent]
})
export class CardBusModule { }
