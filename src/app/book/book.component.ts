import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  sliderValue: number = 50;

  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['']);
  }
}
