import { TeamOneService } from './../shared/teamone.service';
import { LoaderService } from './../shared/loader';
import {Component,Input,OnInit} from '@angular/core';

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
    isLoaded(event){
        event.target.parentElement.classList.add("loaded")
        event.target.parentElement.nextElementSibling.classList.add("removeLoaded");
      }

}