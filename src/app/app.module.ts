import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { ListComponent } from './admin/list/list.component';
import { QuestionComponent } from './admin/question/question.component';
import { MdpComponent } from './admin/mdp/mdp.component';
import { TeamNameComponent } from './user/team-name/team-name.component';
import { ChoicesComponent } from './user/choices/choices.component';
import { WaitingComponent } from './user/waiting/waiting.component';
import { WelcomeComponent } from './projector/welcome/welcome.component';
import { GameboardComponent } from './projector/gameboard/gameboard.component';
import {QuestionsService} from './questions.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    QuestionComponent,
    MdpComponent,
    TeamNameComponent,
    ChoicesComponent,
    WaitingComponent,
    WelcomeComponent,
    GameboardComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
