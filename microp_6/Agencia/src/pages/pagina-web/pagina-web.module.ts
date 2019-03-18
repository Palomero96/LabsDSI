import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaWebPage } from './pagina-web';

@NgModule({
  declarations: [
    PaginaWebPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaWebPage),
  ],
})
export class PaginaWebPageModule {}
