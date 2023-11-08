import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Assignment5';
  sliderValue: any;

  constructor(private router: Router) {}

  navigateToColor() {
    this.router.navigate(['/color']);
  }

  navigateToBook() {
    this.router.navigate(['/book']);
  }
}
