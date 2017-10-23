import { LoaderService } from './shared/loader';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import{routing} from './app-routes';

import{ HomeComponent } from'./home/home.component';
import { TeamOneComponent }  from './team-one/teamone.component';
import { TeamTwoComponent }  from './team-two/teamtwo.component';
import { TeamThreeComponent }  from './team-three/teamthree.component';
import { TeamFourComponent }  from './team-four/teamfour.component';
import { TeamFiveComponent }  from './team-five/teamfive.component';

import{HomeService} from './home/home.service';
import{TeamOneService} from './team-one/teamone.service';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,TeamOneComponent,TeamTwoComponent,TeamThreeComponent,TeamFourComponent,TeamFiveComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HomeService,TeamOneService,LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
