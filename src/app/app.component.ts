import { LoaderService } from './shared/loader';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
