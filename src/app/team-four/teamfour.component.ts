import { LoaderService } from './../shared/loader';
import { TeamOneService } from './../team-one/teamone.service';
import { Component } from '@angular/core';

@Component({
    selector: 'teamfour',
    templateUrl: 'teamfour.component.html',
    styleUrls: ['teamfour.component.css']
})

export class TeamFourComponent {
    teamFour;
    constructor(private teamDetailFromService: TeamOneService,private loaderService: LoaderService) {

    }
    ngOnInit() {
        this.loaderService.display(true);
        this.teamDetailFromService.getdatas4().subscribe(
            data => {
                this.teamFour = data;
                console.log(this.teamFour);
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