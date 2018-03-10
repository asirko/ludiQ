import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './admin/list/list.component';
import {QuestionComponent} from './admin/question/question.component';
import {MdpComponent} from './admin/mdp/mdp.component';
import {TeamNameComponent} from './user/team-name/team-name.component';
import {WaitingComponent} from './user/waiting/waiting.component';
import {ChoicesComponent} from './user/choices/choices.component';
import {WelcomeComponent} from './projector/welcome/welcome.component';
import {GameboardComponent} from './projector/gameboard/gameboard.component';

const routes: Routes = [
  {
    path: 'admin/list',
    component: ListComponent
  }, {
    path: 'admin/question',
    component: QuestionComponent
  }, {
    path: 'admin/mdp',
    component: MdpComponent
  },

  {
    path: '',
    redirectTo: '/user/team-name',
    pathMatch: 'full'
  }, {
    path: 'user/team-name',
    component: TeamNameComponent
  }, {
    path: 'user/waiting',
    component: WaitingComponent
  }, {
    path: 'user/choices',
    component: ChoicesComponent
  },

  {
    path: 'projector/welcome',
    component: WelcomeComponent
  }, {
    path: 'projector/gameboard',
    component: GameboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
