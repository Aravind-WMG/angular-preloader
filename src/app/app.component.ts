import { LoaderService } from './shared/loader';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Preloader For the Contents';
  showLoader: boolean;
  
      constructor(
          private loaderService: LoaderService) {
      }
  
      ngOnInit() {
          this.loaderService.status.subscribe((val: boolean) => {
              this.showLoader = val;
          });
      }
}
