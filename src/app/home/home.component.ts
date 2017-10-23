import {Component} from '@angular/core';

import{team,HomeService} from './home.service';

@Component({
    selector:'home',
    templateUrl:'home.component.html',
    styleUrls:['home.component.css'],
    providers:[HomeService]
    
})

export class HomeComponent{
    teams:team[];

    constructor (teamNameFromService:HomeService){
        this.teams=teamNameFromService.getTeamNames();
    }
}