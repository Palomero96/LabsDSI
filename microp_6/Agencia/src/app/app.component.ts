import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { VuelosPage } from '../pages/vuelos/vuelos';
import { ReservasPage } from '../pages/reservas/reservas';
import { EmbarquePage } from '../pages/embarque/embarque';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { PaginaWebPage } from '../pages/pagina-web/pagina-web';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Vuelos', component: VuelosPage },
      { title: 'Reservas', component: ReservasPage },
      { title: 'Tarjeta Embarque', component: EmbarquePage },
      { title: 'Acerca de', component: AcercaDePage },
      { title: 'Pagina Web', component: PaginaWebPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
