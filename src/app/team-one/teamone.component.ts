import { LoaderService } from './../shared/loader';
import {Component,Input,OnInit} from '@angular/core';
import {TeamOneService} from './teamone.service'

@Component({
    selector:'teamone',
    templateUrl:'teamone.component.html',
    styleUrls:['teamone.component.css'],
    providers:[TeamOneService]
})

export class TeamOneComponent{
    teamOne;


    constructor (private teamDetailFromService:TeamOneService,private loaderService: LoaderService){
        
    }

    ngOnInit(){
        this.loaderService.display(true);
        this.teamDetailFromService.getdatas().subscribe(
            data =>{
                this.teamOne = data;
                console.log(this.teamOne);
            },
            err=>{
                console.log("Error");
            },
            ()=>{
                console.log("Done");
                this.loaderService.display(false);
            }
        );
    }    

}