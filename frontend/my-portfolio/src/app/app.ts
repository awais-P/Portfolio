import { Component, OnInit, signal } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {

  ngOnInit() {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in ms (1 second)
      once: true,     // Whether animation should happen only once while scrolling down
      offset: 150,    // Offset (in px) from the original trigger point
    });

    setTimeout(() => {
      AOS.refresh(); 
    }, 500);

    setTimeout(() => {
      AOS.refresh(); 
    }, 1500);

  }
}