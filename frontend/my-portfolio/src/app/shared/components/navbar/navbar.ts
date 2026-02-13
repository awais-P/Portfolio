import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
isScrolled = false;

  // Listen to the window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // If scrolled more than 50px, change state
    this.isScrolled = window.scrollY > 50;
  }

  // Smooth scroll helper
  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}