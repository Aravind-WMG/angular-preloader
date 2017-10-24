import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent} from '../app.component';

import{ HomeComponent } from'../home/home.component';
import { TeamOneComponent }  from '../team-one/teamone.component';
import { TeamTwoComponent }  from '../team-two/teamtwo.component';
import { TeamThreeComponent }  from '../team-three/teamthree.component';
import { TeamFourComponent }  from '../team-four/teamfour.component';
import { TeamFiveComponent }  from '../team-five/teamfive.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'team-one',
        component: TeamOneComponent,
    },
     {
        path: 'team-two',
        component: TeamTwoComponent,
    },
         {
        path: 'team-three',
        component: TeamThreeComponent,
    },
         {
        path: 'team-four',
        component: TeamFourComponent,
    },{
        path: 'team-five',
        component: TeamFiveComponent,
    }];
  
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
