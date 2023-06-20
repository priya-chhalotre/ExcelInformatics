import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSticky: boolean = false;
  collapsed = true;
constructor(){}
@HostListener('window:scroll', ['$event'])
checkScroll() {
  this.isSticky = window.pageYOffset >= 250;
}
toggleCollapsed(): void {
  this.collapsed = !this.collapsed; 
}

}
