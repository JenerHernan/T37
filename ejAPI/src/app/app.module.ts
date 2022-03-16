import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicomponenteComponent } from './micomponente/micomponente.component';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AboutComponent } from './about/about.component';
import { PersonajedetalleComponent } from './personajedetalle/personajedetalle.component';
import { TuberiaPipe } from './tuberia.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MicomponenteComponent,
    HomeComponent,
    PersonajesComponent,
    AboutComponent,
    PersonajedetalleComponent,
    TuberiaPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
