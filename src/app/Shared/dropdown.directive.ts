import { Directive, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.show') isopen = false;
  @HostListener('click') toggleOpen() {
    this.isopen = !this.isopen;
  }
  constructor() { }
  ngOnInit() {

  }

}
