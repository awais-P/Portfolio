import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isScrolled = false;

  constructor(private router: Router) {}

  // Listen to the window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // If scrolled more than 50px, change state
    this.isScrolled = window.scrollY > 50;
  }

  // Navigate to homepage
  goHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth scroll helper - works from any page
  scrollTo(id: string) {
    const element = document.getElementById(id);
    
    if (element) {
      // If element exists on current page, scroll to it
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Navigate to homepage with fragment, then scroll
      this.router.navigate(['/'], { fragment: id }).then(() => {
        // Wait for navigation and DOM to settle
        setTimeout(() => {
          const targetElement = document.getElementById(id);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      });
    }
  }
}