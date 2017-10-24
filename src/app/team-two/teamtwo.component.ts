import { TeamOneService } from './../shared/teamone.service';
import { LoaderService } from './../shared/loader';
import { Component } from '@angular/core';

@Component({
    selector: 'teamtwo',
    templateUrl: 'teamtwo.component.html',
    styleUrls: ['teamtwo.component.css']
})

export class TeamTwoComponent {
    teamTwo;
    constructor(private teamDetailFromService: TeamOneService,private loaderService: LoaderService) {
    }
    ngOnInit() {
        this.loaderService.display(true);
        this.teamDetailFromService.getdatas2().subscribe(
            data => {
                this.teamTwo = data;
                console.log(this.teamTwo);
            },
            err => {
                console.log("Error");
            },
            () => {
                console.log("Done");
                this.loaderService.display(false);
            }
        );
    }
}