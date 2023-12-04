import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { CardVisitaComponent } from './card-visita/card-visita.component';
import { VideoComponent } from './video/video.component';
import { ProgettiFuturiComponent } from './progetti-futuri/progetti-futuri.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'chi-siamo', component: ChiSiamoComponent },
  { path: 'card-visita', component: CardVisitaComponent },
  { path: 'video', component: VideoComponent},
  { path: 'progetti-futuri', component:ProgettiFuturiComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
