import { NgModule } from '@angular/core';
import { TabsComponentRoutingModule } from './tabs.router.module';
import { TabsComponent } from './tabs.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsComponentRoutingModule,
        DirectivesModule,
        TranslateModule
    ],
    declarations: [
        TabsComponent,
        HeaderComponent
    ]
})
export class TabsModule { }
