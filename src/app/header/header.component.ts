import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {

    @Output()
    currentNavItem: EventEmitter<string> = new EventEmitter<string>();

    onNavClick(navItem: string) {
        this.currentNavItem.emit(navItem);
    }
}