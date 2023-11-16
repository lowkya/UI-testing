import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  constructor(private router: Router) {}
  // goBack() {
  //   this.router.navigate(['']);
  // }
  favouriteColor: string = "";

  navigateToBook() {
    this.router.navigate(['/book']);
  }
}
