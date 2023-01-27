import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UiModule, HeaderComponent, NavComponent, FooterComponent, IconsModule, TemplatesModule
  ]
})
export class CoreModule { }
