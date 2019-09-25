import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaFinalComponent } from './tela-final/tela-final.component';



@NgModule({
  declarations: [
    AppComponent,

    TelaCadastroComponent,

    TelaFinalComponent
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
