import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
//import { AlunosModule } from './alunos/alunos.module';
import { AlunosRoutingModule } from './alunos/alunos.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlunosRoutingModule,
    //AlunosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
