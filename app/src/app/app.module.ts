import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HttpClientModule } from '@angular/common/http';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { CardVisitaComponent } from './card-visita/card-visita.component';
import { VideoComponent } from './video/video.component';
import { ProgettiFuturiComponent } from './progetti-futuri/progetti-futuri.component';
import { CaroselloComponent } from './carosello/carosello.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContattiComponent,
    ChiSiamoComponent,
    CardVisitaComponent,
    VideoComponent,
    ProgettiFuturiComponent,
    CaroselloComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
