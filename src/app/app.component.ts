import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentNavItem: string = 'recipes';
  
  onNavigate(navItem: string) {
      this.currentNavItem = navItem;
  }
}
