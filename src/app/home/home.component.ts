import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Assignment5';
  sliderValue: number;

  constructor(private router: Router) {
    this.sliderValue = 50;
  }

  navigateToColor() {
    this.router.navigate(['/color']);
  }

  navigateToBook() {
    this.router.navigate(['/book']);
  }
}
