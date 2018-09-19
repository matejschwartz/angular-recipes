import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    isOpen = false;

    constructor(private element: ElementRef) { }

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        this.element.nativeElement.parentElement.
            querySelector('.dropdown-menu').
            classList.toggle('show');
    }
}
