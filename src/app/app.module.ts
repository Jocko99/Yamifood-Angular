import { LayoutModule } from './layout/layout.module';
import { ContentComponent } from './layout/content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './home/aboutus-content/aboutus.component';
import { ReservationComponent } from './home/reservation/reservation.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuHeaderComponent } from './menu/menu-header/menu-header.component';
import { MenuContentComponent } from './menu/menu-content/menu-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadPipe } from './pipes/read.pipe';
import { ContactComponent } from './contact/contact.component';
import { ContactHeaderComponent } from './contact/contact-header/contact-header.component';
import { ContactContentComponent } from './contact/contact-content/contact-content.component';
import { AboutComponent } from './about/about.component';
import { AboutHeaderComponent } from './about/about-header/about-header.component';
import { AboutContentComponent } from './about/about-content/about-content.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthorComponent } from './author/author.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationHeaderComponent } from './reservations/reservation-header/reservation-header.component';


const routes: Routes = [
  {
    path: "",
    component: ContentComponent,
    children:[
      {
        path: "",
        redirectTo: "pocetna",
        pathMatch: "full"
      },
      {
        path: "pocetna",
        component: HomeComponent
      },
      {
        path: "meni",
        component: MenuComponent
      },
      {
        path: "rezervacija",
        component: ReservationsComponent
      },
      {
        path: "onama",
        component: AboutComponent
      },
      {
        path: "kontakt",
        component: ContactComponent
      },
      {
        path: "autor",
        component: AuthorComponent
      },
      {
        path: "**",
        component: NotfoundComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ReservationComponent,
    HomeHeaderComponent,
    MenuComponent,
    MenuHeaderComponent,
    MenuContentComponent,
    ReadPipe,
    ContactComponent,
    ContactHeaderComponent,
    ContactContentComponent,
    AboutComponent,
    AboutHeaderComponent,
    AboutContentComponent,
    NotfoundComponent,
    AuthorComponent,
    ReservationsComponent,
    ReservationHeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
