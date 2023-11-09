import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ColorComponent} from "./color/color.component";
import {BookComponent} from "./book/book.component";
import {RouterModule} from "@angular/router";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [
      FormsModule,
      RouterModule
    ],
    declarations: [
      AppComponent,
      ColorComponent,
      BookComponent
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
