import { CardCounterModule } from 'src/app/common/card/counter/card-counter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePage } from './favorite.page';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardCounterComponent } from 'src/app/common/card/counter/card-counter.component';
import { LoadingComponent } from 'src/app/common/loading/loading.component';
import { TranslateModule } from '@ngx-translate/core';
import { AppModule } from 'src/app/app.module';
import { LoadingModule } from 'src/app/common/loading/loading.module';

@NgModule({
  declarations: [
    FavoritePage,
    ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: FavoritePage }]),
    TranslateModule,
    CardCounterModule,
    LoadingModule
  ]
})
export class FavoriteModule { }
