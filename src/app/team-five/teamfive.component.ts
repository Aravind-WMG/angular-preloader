import { LoaderService } from './../shared/loader';
import { TeamOneService } from './../team-one/teamone.service';
import { Component } from '@angular/core';

@Component({
    selector: 'teamfive',
    templateUrl: 'teamfive.component.html',
    styleUrls: ['teamfive.component.css']
})

export class TeamFiveComponent {
    teamFive;
    constructor(private teamDetailFromService: TeamOneService, private loaderService: LoaderService) {

    }
    ngOnInit() {
        this.loaderService.display(true);
        this.teamDetailFromService.getdatas5().subscribe(
            data => {
                this.teamFive = data;
                console.log(this.teamFive);
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