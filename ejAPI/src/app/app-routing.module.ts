import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajedetalleComponent } from './personajedetalle/personajedetalle.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'personajes',
    component:PersonajesComponent
  },
  {
    path:'personajes/:id',
    component:PersonajedetalleComponent
  },
  {
    path:'about',
    component:AboutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
