import { LoadingComponent } from 'src/app/common/loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
      LoadingComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LoadingComponent]
})
export class LoadingModule { }
