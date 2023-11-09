import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorComponent } from './color.component';
import {FormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";

describe('ColorComponent', () => {
  let component: ColorComponent;
  let fixture: ComponentFixture<ColorComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        RouterTestingModule.withRoutes([{ path: 'color', component: ColorComponent }]),
      ],
      declarations: [ColorComponent]
    });
    fixture = TestBed.createComponent(ColorComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take the flow back to home on clicking go back', () => {
    const button = fixture.debugElement.query(By.css('button'));
    // const router = TestBed.inject(RouterTestingModule);
    const spy = spyOn(component, "goBack");

    button.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should have initial url', () => {
    expect(router.url).toBe('/color');
  });

  it('should update the url to go back', () => {
    const navigateSpy = spyOn(router, 'navigate');

    expect(router.url).toBe('/color');

    // Trigger the navigation
    component.goBack();

    // Wait for all asynchronous tasks to complete
    fixture.whenStable().then(() => {
      // Check if router.navigate was called with the correct argument
      expect(navigateSpy).toHaveBeenCalledWith(['']);

      // Check the current URL
      expect(router.url).toBe('/');
    });
  });
});
