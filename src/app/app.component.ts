import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showDetails:boolean = false;
  items = [];
  title = 'angular-test';

  onBtnClick() {
    this.showDetails = !this.showDetails;
    this.items.push(new Date().getTime());
  }
}
