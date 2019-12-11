import { RefresherComponent } from 'src/app/common/refresher/refresher.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    RefresherComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RefresherComponent]
})
export class RefresherModule { }
