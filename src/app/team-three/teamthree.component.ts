import { LoaderService } from './../shared/loader';
import { TeamOneService } from './../shared/teamone.service';
import { Component } from '@angular/core';

@Component({
    selector: 'teamthree',
    templateUrl: 'teamthree.component.html',
    styleUrls: ['teamthree.component.css']
})

export class TeamThreeComponent {
    teamThree;
    constructor(private teamDetailFromService: TeamOneService, private loaderService: LoaderService) {

    }

    ngOnInit() {
        this.loaderService.display(true);
        this.teamDetailFromService.getdatas3().subscribe(
            data => {
                this.teamThree = data;
                console.log(this.teamThree);
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