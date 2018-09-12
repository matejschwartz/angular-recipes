import { Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    isOpen = false;

    constructor(private element: ElementRef) {

    }

    // @HostBinding('class.show') isOpen = false;
    
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        this.element.nativeElement.parentElement.
            querySelector('.dropdown-menu').
            classList.toggle('show');
    }
}