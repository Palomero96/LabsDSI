import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { VuelosPage } from '../pages/vuelos/vuelos';
import { ReservasPage } from '../pages/reservas/reservas';
import { EmbarquePage } from '../pages/embarque/embarque';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { PaginaWebPage } from '../pages/pagina-web/pagina-web';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VuelosPage,
    ReservasPage,
    EmbarquePage,
    AcercaDePage,
    PaginaWebPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    VuelosPage,
    ReservasPage,
    EmbarquePage,
    AcercaDePage,
    PaginaWebPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
