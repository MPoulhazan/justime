import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { AppModule } from './../../app.module';
import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { LoadingModule } from 'src/app/common/loading/loading.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CardBusModule } from 'src/app/common/card/bus/card-bus.module';
import { RefresherModule } from 'src/app/common/refresher/refresher.module';

@NgModule({
  declarations: [
      HomePage
    ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    CardBusModule,
    LoadingModule,
    MaterialModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    RefresherModule
  ]
})

export class HomeModule { }
