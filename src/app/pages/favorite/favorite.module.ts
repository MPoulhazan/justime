import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePage } from './favorite.page';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule } from 'src/app/common/loading/loading.module';
import { CardBusModule } from 'src/app/common/card/bus/card-bus.module';
import { RefresherModule } from 'src/app/common/refresher/refresher.module';

@NgModule({
  declarations: [
    FavoritePage,
    ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: FavoritePage }]),
    TranslateModule,
    LoadingModule,
    CardBusModule,
    RefresherModule
  ]
})
export class FavoriteModule { }
